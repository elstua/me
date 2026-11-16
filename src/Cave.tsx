import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './Cave.css';

type Theme = 'light' | 'dark';

type CaveProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

type CameraSettings = {
  yaw: number;
  pitch: number;
  distance: number;
  targetX: number;
  targetY: number;
  fov: number;
};

const desktopCamera: CameraSettings = { yaw: 30, pitch: -4.4, distance: 11.2, targetX: 0.65, targetY: -0.5, fov: 38 };
const mobileCamera: CameraSettings = { yaw: 0, pitch: 0, distance: 10.6, targetX: 0.7, targetY: -1.15, fov: 48 };

const cameraControls = [
  { key: 'yaw', label: 'Yaw', min: -40, max: 40, step: 0.1, unit: '°' },
  { key: 'pitch', label: 'Pitch', min: -15, max: 20, step: 0.1, unit: '°' },
  { key: 'distance', label: 'Distance', min: 5, max: 14, step: 0.1, unit: '' },
  { key: 'targetX', label: 'Target X', min: -3, max: 3, step: 0.05, unit: '' },
  { key: 'targetY', label: 'Target Y', min: -2, max: 2, step: 0.05, unit: '' },
  { key: 'fov', label: 'FOV', min: 30, max: 65, step: 1, unit: '°' },
] as const;

type HoveredPainting = {
  title: string;
  note: string;
  x: number;
  y: number;
};

const paintings = [
  { src: '/Cave/Person.svg', title: 'The human', note: 'Always the starting point.', x: -0.75, y: 0.15, width: 0.82, height: 0.86, rotation: -0.13 },
  { src: '/Cave/bird.svg', title: 'A different perspective', note: 'Step back. Look again.', x: 1.25, y: 1.4, width: 1.02, height: 1.02, rotation: 0.08 },
  { src: '/Cave/mind.svg', title: 'Curiosity', note: 'Follow the interesting questions.', x: 3.35, y: 1.2, width: 1.25, height: 1.25, rotation: -0.08 },
  { src: '/Cave/tree 2.svg', title: 'Growth', note: 'Good things take root slowly.', x: 1.4, y: -1.3, width: 0.95, height: 0.95, rotation: 0.06 },
  { src: '/Cave/hand.svg', title: 'The craft', note: 'Ideas become real through making.', x: 4.35, y: -0.65, width: 0.9, height: 0.9, rotation: 0.12 },
  { src: '/Cave/ocean.svg', title: 'Exploration', note: 'Beyond the familiar shoreline.', x: -0.05, y: -1.55, width: 0.94, height: 0.94, rotation: -0.05 },
  { src: '/Cave/laptop.svg', title: 'New tools', note: 'Old instincts, new mediums.', x: 3.35, y: -1.55, width: 0.84, height: 0.84, rotation: -0.09 },
];

function random(seed: number) {
  let value = seed;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function hash(x: number, y: number) {
  const value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return value - Math.floor(value);
}

function noise(x: number, y: number) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const a = hash(ix, iy);
  const b = hash(ix + 1, iy);
  const c = hash(ix, iy + 1);
  const d = hash(ix + 1, iy + 1);
  return THREE.MathUtils.lerp(THREE.MathUtils.lerp(a, b, ux), THREE.MathUtils.lerp(c, d, ux), uy);
}

function fbm(x: number, y: number) {
  let value = 0;
  let amplitude = 0.5;
  for (let octave = 0; octave < 5; octave += 1) {
    value += noise(x, y) * amplitude;
    x = x * 2.03 + 13.7;
    y = y * 2.03 + 9.2;
    amplitude *= 0.5;
  }
  return value;
}

function wallDepth(x: number, y: number) {
  return (fbm(x * 0.65 + 4, y * 0.65 + 8) - 0.5) * 0.72
    + (noise(x * 3.2, y * 3.2) - 0.5) * 0.1
    - x * x * 0.012;
}

function createStoneTextures() {
  const size = 768;
  const colorCanvas = document.createElement('canvas');
  const bumpCanvas = document.createElement('canvas');
  colorCanvas.width = colorCanvas.height = size;
  bumpCanvas.width = bumpCanvas.height = size;
  const colorContext = colorCanvas.getContext('2d')!;
  const bumpContext = bumpCanvas.getContext('2d')!;
  const colorImage = colorContext.createImageData(size, size);
  const bumpImage = bumpContext.createImageData(size, size);

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const broad = fbm(x / 145, y / 145);
      const fine = fbm(x / 24 + 30, y / 24 + 30);
      const grain = hash(x, y) * 0.12;
      const value = broad * 0.67 + fine * 0.25 + grain;
      const index = (y * size + x) * 4;
      colorImage.data[index] = 72 + value * 72;
      colorImage.data[index + 1] = 59 + value * 59;
      colorImage.data[index + 2] = 46 + value * 46;
      colorImage.data[index + 3] = 255;
      const bump = 60 + fine * 165 + grain * 80;
      bumpImage.data[index] = bumpImage.data[index + 1] = bumpImage.data[index + 2] = bump;
      bumpImage.data[index + 3] = 255;
    }
  }

  colorContext.putImageData(colorImage, 0, 0);
  bumpContext.putImageData(bumpImage, 0, 0);
  const rng = random(41);
  for (let crack = 0; crack < 26; crack += 1) {
    let x = rng() * size;
    let y = rng() * size;
    colorContext.beginPath();
    bumpContext.beginPath();
    colorContext.moveTo(x, y);
    bumpContext.moveTo(x, y);
    const segments = 4 + Math.floor(rng() * 8);
    for (let segment = 0; segment < segments; segment += 1) {
      x += (rng() - 0.5) * 65;
      y += rng() * 38;
      colorContext.lineTo(x, y);
      bumpContext.lineTo(x, y);
    }
    colorContext.strokeStyle = `rgba(25, 19, 14, ${0.12 + rng() * 0.2})`;
    colorContext.lineWidth = 0.6 + rng() * 1.6;
    colorContext.stroke();
    bumpContext.strokeStyle = 'rgba(10, 10, 10, 0.45)';
    bumpContext.lineWidth = 1 + rng() * 2;
    bumpContext.stroke();
  }

  const map = new THREE.CanvasTexture(colorCanvas);
  map.colorSpace = THREE.SRGBColorSpace;
  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  for (const texture of [map, bumpMap]) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2.4, 1.5);
    texture.anisotropy = 4;
  }
  return { map, bumpMap };
}

function weatherPainting(texture: THREE.Texture) {
  const image = texture.image as HTMLImageElement;
  const canvas = document.createElement('canvas');
  canvas.width = image.width || 512;
  canvas.height = image.height || 512;
  const context = canvas.getContext('2d')!;
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = 'destination-out';
  const rng = random(canvas.width + canvas.height);
  for (let mark = 0; mark < canvas.width * 0.75; mark += 1) {
    context.fillStyle = `rgba(0,0,0,${0.15 + rng() * 0.65})`;
    context.fillRect(rng() * canvas.width, rng() * canvas.height, 0.5 + rng() * 3, 0.5 + rng() * 2);
  }
  const result = new THREE.CanvasTexture(canvas);
  result.colorSpace = THREE.SRGBColorSpace;
  texture.dispose();
  return result;
}

function createGlowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const context = canvas.getContext('2d')!;
  const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255,220,135,1)');
  gradient.addColorStop(0.15, 'rgba(255,125,35,.65)');
  gradient.addColorStop(0.5, 'rgba(255,75,15,.14)');
  gradient.addColorStop(1, 'rgba(255,50,0,0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(canvas);
}

function createShadowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const context = canvas.getContext('2d')!;
  const gradient = context.createRadialGradient(64, 64, 4, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(0,0,0,.7)');
  gradient.addColorStop(0.45, 'rgba(0,0,0,.4)');
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(canvas);
}

const flameVertex = `
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    p.x += sin(uTime * 2.4 + p.y * 3.0) * 0.055 * uv.y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const flameFragment = `
  uniform float uTime;
  varying vec2 vUv;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1., 0.)), f.x), mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), f.x), f.y);
  }
  void main() {
    vec2 uv = vUv;
    float n = noise(vec2(uv.x * 5.0, uv.y * 4.0 - uTime * 2.2));
    n += noise(vec2(uv.x * 11.0 + 4.0, uv.y * 8.0 - uTime * 3.4)) * 0.45;
    float width = mix(0.42, 0.025, pow(uv.y, 0.72));
    float body = 1.0 - smoothstep(width * 0.45, width, abs(uv.x - 0.5) + (n - 0.55) * 0.14);
    float alpha = body * (1.0 - smoothstep(0.55 + n * 0.18, 1.0, uv.y)) * smoothstep(0.0, 0.08, uv.y);
    vec3 color = mix(vec3(1.0, 0.18, 0.015), vec3(1.0, 0.88, 0.36), (1.0 - uv.y) * body);
    gl_FragColor = vec4(color, alpha * 0.68);
  }
`;

export default function Cave({ theme, onToggleTheme }: CaveProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<() => void>(() => undefined);
  const themeRef = useRef<Theme>(theme);
  const themeControllerRef = useRef<{ setTheme: (theme: Theme) => void } | null>(null);
  const cameraControllerRef = useRef<{ setCamera: (settings: CameraSettings) => void } | null>(null);
  themeRef.current = theme;
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [hovered, setHovered] = useState<HoveredPainting | null>(null);
  const [cameraSettings, setCameraSettings] = useState<CameraSettings>(desktopCamera);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    themeControllerRef.current?.setTheme(theme);
  }, [theme]);

  useEffect(() => {
    cameraControllerRef.current?.setCamera(cameraSettings);
  }, [cameraSettings]);

  const updateCamera = (key: keyof CameraSettings, value: number) => {
    setCopied(false);
    setCameraSettings((current) => ({ ...current, [key]: value }));
  };

  const resetCamera = () => {
    const defaults = window.innerWidth < 760 ? mobileCamera : desktopCamera;
    setCopied(false);
    setCameraSettings({ ...defaults });
    cameraControllerRef.current?.setCamera(defaults);
  };

  const copyCameraSettings = async () => {
    await navigator.clipboard.writeText(JSON.stringify(cameraSettings, null, 2));
    setCopied(true);
  };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    if (window.innerWidth < 760) setCameraSettings({ ...mobileCamera });

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    } catch {
      setFailed(true);
      setReady(true);
      return;
    }

    let disposed = false;
    let frame = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.domElement.setAttribute('aria-label', 'Interactive 3D cave wall with ancient-style drawings and a fire');
    renderer.domElement.setAttribute('role', 'img');
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0b0907');
    scene.fog = new THREE.FogExp2('#0b0907', 0.055);
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 60);
    const wallGroup = new THREE.Group();
    scene.add(wallGroup);

    const { map, bumpMap } = createStoneTextures();
    const rockMaterial = new THREE.MeshStandardMaterial({
      map,
      bumpMap,
      bumpScale: 0.32,
      color: '#b3a18b',
      roughness: 0.98,
      metalness: 0,
    });
    const wallGeometry = new THREE.PlaneGeometry(16, 10, 190, 120);
    const wallPositions = wallGeometry.attributes.position;
    for (let index = 0; index < wallPositions.count; index += 1) {
      const x = wallPositions.getX(index);
      const y = wallPositions.getY(index);
      wallPositions.setZ(index, wallDepth(x, y));
    }
    wallGeometry.computeVertexNormals();
    const wall = new THREE.Mesh(wallGeometry, rockMaterial);
    wallGroup.add(wall);

    const borderGeometry = new THREE.IcosahedronGeometry(1, 3);
    const borderPositions = borderGeometry.attributes.position;
    for (let index = 0; index < borderPositions.count; index += 1) {
      const x = borderPositions.getX(index);
      const y = borderPositions.getY(index);
      const z = borderPositions.getZ(index);
      const amount = 0.82 + noise(x * 3 + 4, y * 3 + z) * 0.35;
      borderPositions.setXYZ(index, x * amount, y * amount, z * amount);
    }
    borderGeometry.computeVertexNormals();
    const rng = random(97);
    const borderRocks: THREE.Mesh[] = [];
    const addRock = (x: number, y: number, z: number, sx: number, sy: number, sz: number) => {
      const rock = new THREE.Mesh(borderGeometry, rockMaterial);
      rock.position.set(x, y, z);
      rock.scale.set(sx, sy, sz);
      rock.rotation.set(rng() * 2, rng() * 2, rng() * 2);
      wallGroup.add(rock);
      borderRocks.push(rock);
    };
    for (let x = -7; x <= 7; x += 1.35) addRock(x, 4.35 + rng() * 0.35, 0.3, 1.3, 1.05 + rng(), 1.2);
    for (let y = -3.8; y <= 4.3; y += 1.25) addRock(7.1 + rng() * 0.3, y, 0.5, 1.25, 1.35, 1.35);
    for (let y = -3.8; y <= 4.3; y += 1.5) addRock(-7.2, y, 0.2, 1.4, 1.5, 1.3);

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(24, 16, 30, 20), rockMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, -2.6, 3.5);
    scene.add(floor);

    const ambient = new THREE.HemisphereLight('#7e8792', '#1b1008', 0.38);
    scene.add(ambient);
    const coolFill = new THREE.DirectionalLight('#9aa7b5', 0.52);
    coolFill.position.set(4, 5, 7);
    scene.add(coolFill);
    const fireLight = new THREE.PointLight('#ff8b42', 95, 18, 2);
    fireLight.position.set(-2.85, -1.85, 2.8);
    scene.add(fireLight);
    const wallLight = new THREE.SpotLight('#ffb26f', 115, 24, 0.92, 1, 1.6);
    wallLight.position.set(-3.2, -1.7, 4.4);
    wallLight.target.position.set(1.2, 0.3, 0);
    scene.add(wallLight, wallLight.target);

    const fire = new THREE.Group();
    fire.position.set(-1.25, -2.15, 2.5);
    scene.add(fire);
    const shadowMaterial = new THREE.MeshBasicMaterial({
      map: createShadowTexture(),
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
    });
    const fireShadow = new THREE.Mesh(new THREE.PlaneGeometry(2.7, 1.9), shadowMaterial);
    fireShadow.rotation.x = -Math.PI / 2;
    fireShadow.position.set(-2.05, -2.58, 2.5);
    scene.add(fireShadow);
    const logMaterial = new THREE.MeshStandardMaterial({ color: '#24150d', roughness: 1 });
    for (let index = 0; index < 4; index += 1) {
      const log = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 1.35, 9), logMaterial);
      log.rotation.z = Math.PI / 2;
      log.rotation.y = index * Math.PI / 2 + 0.35;
      log.position.y = 0.13 + (index % 2) * 0.1;
      fire.add(log);
    }
    for (let index = 0; index < 11; index += 1) {
      const angle = (index / 11) * Math.PI * 2;
      const stone = new THREE.Mesh(borderGeometry, rockMaterial);
      stone.scale.set(0.2 + rng() * 0.09, 0.13 + rng() * 0.06, 0.18 + rng() * 0.08);
      stone.position.set(Math.cos(angle) * 0.83, 0.05, Math.sin(angle) * 0.65);
      fire.add(stone);
    }

    const flameMaterials: THREE.ShaderMaterial[] = [];
    const flameMeshes: THREE.Mesh[] = [];
    for (let index = 0; index < 3; index += 1) {
      const material = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: index * 1.7 } },
        vertexShader: flameVertex,
        fragmentShader: flameFragment,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.NormalBlending,
      });
      const geometry = new THREE.PlaneGeometry(1.2 - index * 0.15, 1.85 - index * 0.25, 1, 1);
      geometry.translate(0, 0.85, 0);
      const flame = new THREE.Mesh(geometry, material);
      flame.rotation.y = index * Math.PI / 3;
      flame.position.y = 0.18;
      fire.add(flame);
      flameMaterials.push(material);
      flameMeshes.push(flame);
    }

    const glowTexture = createGlowTexture();
    const glowMaterial = new THREE.SpriteMaterial({ map: glowTexture, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.62 });
    const glow = new THREE.Sprite(glowMaterial);
    glow.position.set(0, 0.8, 0);
    glow.scale.set(4.8, 4.8, 1);
    fire.add(glow);

    const emberCount = 42;
    const emberPositions = new Float32Array(emberCount * 3);
    const emberSpeeds = new Float32Array(emberCount);
    for (let index = 0; index < emberCount; index += 1) {
      emberPositions[index * 3] = (rng() - 0.5) * 0.7;
      emberPositions[index * 3 + 1] = rng() * 2.8;
      emberPositions[index * 3 + 2] = (rng() - 0.5) * 0.5;
      emberSpeeds[index] = 0.2 + rng() * 0.55;
    }
    const emberGeometry = new THREE.BufferGeometry();
    emberGeometry.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));
    const emberMaterial = new THREE.PointsMaterial({ color: '#ffb058', size: 0.026, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false });
    const embers = new THREE.Points(emberGeometry, emberMaterial);
    embers.position.y = 0.35;
    fire.add(embers);

    const dustCount = 170;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let index = 0; index < dustCount; index += 1) {
      dustPositions[index * 3] = (rng() - 0.5) * 13;
      dustPositions[index * 3 + 1] = (rng() - 0.5) * 7;
      dustPositions[index * 3 + 2] = rng() * 5;
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({ color: '#e6b784', size: 0.012, transparent: true, opacity: 0.28, depthWrite: false });
    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    const paintingMeshes: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshStandardMaterial>[] = [];
    let mobileLayout = window.innerWidth < 760;
    const textureLoader = new THREE.TextureLoader();
    for (const painting of paintings) {
      textureLoader.loadAsync(painting.src).then((loadedTexture) => {
        if (disposed) {
          loadedTexture.dispose();
          return;
        }
        const texture = weatherPainting(loadedTexture);
        const geometry = new THREE.PlaneGeometry(painting.width, painting.height, 24, 24);
        const positions = geometry.attributes.position;
        for (let index = 0; index < positions.count; index += 1) {
          const localX = positions.getX(index);
          const localY = positions.getY(index);
          const cos = Math.cos(painting.rotation);
          const sin = Math.sin(painting.rotation);
          const worldX = painting.x + localX * cos - localY * sin;
          const worldY = painting.y + localX * sin + localY * cos;
          positions.setZ(index, wallDepth(worldX, worldY) + 0.018);
        }
        geometry.computeVertexNormals();
        const material = new THREE.MeshStandardMaterial({
          map: texture,
          color: themeRef.current === 'dark' ? '#d58b50' : '#b46b45',
          emissive: '#8a3517',
          emissiveIntensity: 0,
          transparent: true,
          opacity: themeRef.current === 'dark' ? 0.72 : 0.86,
          alphaTest: 0.035,
          roughness: 1,
          depthWrite: false,
          polygonOffset: true,
          polygonOffsetFactor: -2,
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(mobileLayout ? painting.x * 0.5 - 0.1 : painting.x, painting.y, 0);
        mesh.rotation.z = painting.rotation;
        mesh.userData = { title: painting.title, note: painting.note, desktopX: painting.x };
        wallGroup.add(mesh);
        paintingMeshes.push(mesh);
      }).catch(() => undefined);
    }

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(2, 2);
    let hoveredMesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshStandardMaterial> | null = null;
    let dragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let targetYaw = 0;
    let targetPitch = 0;
    let yaw = 0;
    let pitch = 0;
    let baseZ = 9;
    let targetX = 0.65;
    let targetY = 0;

    const clearHover = () => {
      if (hoveredMesh) hoveredMesh.material.emissiveIntensity = 0;
      hoveredMesh = null;
      setHovered(null);
      renderer.domElement.classList.remove('is-over-painting');
    };

    const updatePointer = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const onPointerMove = (event: PointerEvent) => {
      updatePointer(event);
      if (dragging) {
        targetYaw = THREE.MathUtils.clamp(targetYaw - (event.clientX - dragStartX) * 0.0022, -0.7, 0.7);
        targetPitch = THREE.MathUtils.clamp(targetPitch + (event.clientY - dragStartY) * 0.0018, -0.14, 0.16);
        dragStartX = event.clientX;
        dragStartY = event.clientY;
        clearHover();
        return;
      }
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(paintingMeshes, false)[0];
      const next = hit?.object as THREE.Mesh<THREE.PlaneGeometry, THREE.MeshStandardMaterial> | undefined;
      if (next !== hoveredMesh) {
        if (hoveredMesh) hoveredMesh.material.emissiveIntensity = 0;
        hoveredMesh = next || null;
      }
      if (hoveredMesh) {
        hoveredMesh.material.emissiveIntensity = 0.5;
        renderer.domElement.classList.add('is-over-painting');
        setHovered({ title: hoveredMesh.userData.title, note: hoveredMesh.userData.note, x: event.clientX, y: event.clientY });
      } else {
        clearHover();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      dragStartX = event.clientX;
      dragStartY = event.clientY;
      renderer.domElement.setPointerCapture(event.pointerId);
      renderer.domElement.classList.add('is-dragging');
      clearHover();
    };
    const onPointerUp = (event: PointerEvent) => {
      dragging = false;
      if (renderer.domElement.hasPointerCapture(event.pointerId)) renderer.domElement.releasePointerCapture(event.pointerId);
      renderer.domElement.classList.remove('is-dragging');
      setCameraSettings((current) => ({
        ...current,
        yaw: Math.round(THREE.MathUtils.radToDeg(targetYaw) * 10) / 10,
        pitch: Math.round(THREE.MathUtils.radToDeg(targetPitch) * 10) / 10,
      }));
    };
    const onPointerLeave = () => {
      if (!dragging) clearHover();
    };
    const canvas = renderer.domElement;
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointercancel', onPointerUp);
    canvas.addEventListener('pointerleave', onPointerLeave);

    const applyCamera = (settings: CameraSettings) => {
      targetYaw = yaw = THREE.MathUtils.degToRad(settings.yaw);
      targetPitch = pitch = THREE.MathUtils.degToRad(settings.pitch);
      baseZ = settings.distance;
      targetX = settings.targetX;
      targetY = settings.targetY;
      camera.fov = settings.fov;
      camera.updateProjectionMatrix();
      clearHover();
    };
    cameraControllerRef.current = { setCamera: applyCamera };

    resetRef.current = () => {
      applyCamera(mobileLayout ? mobileCamera : desktopCamera);
    };

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      const mobile = width < 760;
      const layoutChanged = mobile !== mobileLayout;
      mobileLayout = mobile;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.fov = mobile ? 48 : 42;
      baseZ = mobile ? 10.6 : 9;
      targetX = mobile ? 0.7 : 0.65;
      targetY = mobile ? -1.15 : 0;
      wallGroup.position.x = mobile ? 0.15 : 1.25;
      wallGroup.position.y = mobile ? -0.85 : 0;
      fire.position.x = mobile ? 0 : -2.05;
      floor.position.y = mobile ? -3.5 : -2.03;
      fire.position.y = floor.position.y + 0.08;
      fireShadow.position.set(fire.position.x, floor.position.y + 0.015, fire.position.z);
      fireLight.position.x = fire.position.x;
      fireLight.position.y = fire.position.y + 1;
      paintingMeshes.forEach((mesh) => {
        mesh.position.x = mobile ? mesh.userData.desktopX * 0.5 - 0.1 : mesh.userData.desktopX;
      });
      if (layoutChanged) {
        const defaults = mobile ? mobileCamera : desktopCamera;
        setCameraSettings({ ...defaults });
        applyCamera(defaults);
      }
      camera.updateProjectionMatrix();
    };
    resize();
    applyCamera(mobileLayout ? mobileCamera : desktopCamera);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    const applyTheme = (nextTheme: Theme) => {
      const dark = nextTheme === 'dark';
      themeRef.current = nextTheme;
      scene.background = new THREE.Color(dark ? '#0b0907' : '#d8c7ae');
      if (scene.fog instanceof THREE.FogExp2) {
        scene.fog.color.set(dark ? '#0b0907' : '#d8c7ae');
        scene.fog.density = dark ? 0.055 : 0.035;
      }
      renderer.toneMappingExposure = dark ? 1.12 : 1.3;
      if (dark) rockMaterial.color.set('#b3a18b');
      else rockMaterial.color.setRGB(2.5, 2.35, 2.15);
      rockMaterial.bumpScale = dark ? 0.32 : 0.22;
      ambient.color.set(dark ? '#7e8792' : '#fff7ed');
      ambient.groundColor.set(dark ? '#1b1008' : '#baafa2');
      ambient.intensity = dark ? 0.38 : 1.65;
      coolFill.color.set(dark ? '#9aa7b5' : '#fff1da');
      coolFill.intensity = dark ? 0.52 : 2.1;
      logMaterial.color.set(dark ? '#24150d' : '#4a3a2c');
      shadowMaterial.opacity = dark ? 0.38 : 0.24;
      flameMeshes.forEach((mesh) => { mesh.visible = dark; });
      glow.visible = dark;
      embers.visible = dark;
      fireLight.intensity = dark ? 95 : 0;
      wallLight.intensity = dark ? 115 : 0;
      dustMaterial.opacity = dark ? 0.28 : 0.12;
      paintingMeshes.forEach((mesh) => {
        mesh.material.color.set(dark ? '#d58b50' : '#b46b45');
        mesh.material.opacity = dark ? 0.72 : 0.86;
      });
    };
    themeControllerRef.current = { setTheme: applyTheme };
    applyTheme(themeRef.current);

    let previousTime = performance.now();
    let elapsedTime = 0;
    const render = () => {
      if (disposed) return;
      const currentTime = performance.now();
      const delta = Math.min((currentTime - previousTime) / 1000, 0.04);
      previousTime = currentTime;
      elapsedTime += delta;
      const time = elapsedTime;
      yaw = THREE.MathUtils.damp(yaw, targetYaw, 4.5, delta);
      pitch = THREE.MathUtils.damp(pitch, targetPitch, 4.5, delta);
      camera.position.set(Math.sin(yaw) * baseZ, targetY + Math.sin(pitch) * baseZ, Math.cos(yaw) * baseZ);
      camera.lookAt(targetX, targetY, 0);
      if (themeRef.current === 'dark' && !reducedMotion) {
        const flicker = Math.sin(time * 11.7) * 5 + Math.sin(time * 19.3) * 3 + Math.sin(time * 4.1) * 5;
        fireLight.intensity = 95 + flicker;
        wallLight.intensity = 115 + flicker * 0.8;
        glowMaterial.opacity = 0.58 + Math.sin(time * 8.3) * 0.055;
        flameMaterials.forEach((material, index) => { material.uniforms.uTime.value = time + index * 1.7; });
        const positions = emberGeometry.attributes.position;
        for (let index = 0; index < emberCount; index += 1) {
          let y = positions.getY(index) + emberSpeeds[index] * delta;
          if (y > 3) y = 0;
          positions.setY(index, y);
          positions.setX(index, positions.getX(index) + Math.sin(time * 2 + index) * delta * 0.015);
        }
        positions.needsUpdate = true;
        dust.rotation.y = Math.sin(time * 0.04) * 0.025;
      }
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    render();
    setReady(true);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerUp);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      const geometries = new Set<THREE.BufferGeometry>();
      const materials = new Set<THREE.Material>();
      const textures = new Set<THREE.Texture>();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.Sprite) {
          if ('geometry' in object && object.geometry) geometries.add(object.geometry as THREE.BufferGeometry);
          const objectMaterials = Array.isArray(object.material) ? object.material : [object.material];
          objectMaterials.forEach((material) => {
            materials.add(material);
            for (const value of Object.values(material)) if (value instanceof THREE.Texture) textures.add(value);
          });
        }
      });
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      textures.forEach((texture) => texture.dispose());
      map.dispose();
      bumpMap.dispose();
      glowTexture.dispose();
      renderer.dispose();
      canvas.remove();
      resetRef.current = () => undefined;
      themeControllerRef.current = null;
      cameraControllerRef.current = null;
    };
  }, []);

  return (
    <div className={`cave-scene ${ready ? 'is-ready' : ''}`}>
      <div ref={mountRef} className="cave-canvas" />
      {failed && <div className="cave-fallback" aria-hidden="true" />}
      {!ready && <div className="cave-loading">Entering the cave</div>}
      {hovered && (
        <div className="painting-label" style={{ left: hovered.x, top: hovered.y }} role="status">
          <span>{hovered.title}</span>
          <small>{hovered.note}</small>
        </div>
      )}
      <div className="scene-controls">
        <button className="reset-view" type="button" onClick={resetCamera} aria-label="Reset cave view">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.7 9A8 8 0 1 1 4 14M4.7 9V4m0 5h5" /></svg>
          Reset view
        </button>
        <span aria-hidden="true" />
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
          {theme === 'light' ? 'Dark theme' : 'Light theme'}
        </button>
      </div>
      <div className="camera-panel" aria-label="Camera setup controls">
        <div className="camera-panel-heading">
          <span>Camera setup</span>
          <button type="button" onClick={copyCameraSettings}>{copied ? 'Copied' : 'Copy values'}</button>
        </div>
        {cameraControls.map((control) => (
          <label key={control.key}>
            <span>{control.label}</span>
            <input
              type="range"
              aria-label={`Camera ${control.label}`}
              min={control.min}
              max={control.max}
              step={control.step}
              value={cameraSettings[control.key]}
              onChange={(event) => updateCamera(control.key, Number(event.target.value))}
            />
            <output>{cameraSettings[control.key]}{control.unit}</output>
          </label>
        ))}
      </div>
    </div>
  );
}
