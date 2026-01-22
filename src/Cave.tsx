import React, { useEffect, useRef, useState } from 'react';
import { loadAndPixelateImage } from './utils/pixelateCanvas';
import { GlitchEffect } from './utils/glitchEffect';

interface ImageConfig {
  src: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  size: {
    width: number;
    height: number;
  };
  zIndex?: number;
  pixelSize?: number; // Optional per-image pixel size (overrides global pixelSize)
}

interface CaveProps {
  pixelSize?: number;
  glitchIntensity?: number;
  images?: ImageConfig[];
  gradient?: {
    enabled?: boolean;
    type?: 'linear' | 'radial';
    direction?: 'top' | 'bottom' | 'left' | 'right' | 'center';
    intensity?: number;
  };
}

const defaultImages: ImageConfig[] = [
  {
      src: '/Cave/Person.svg',
      position: {
        top: '60px',
        left: '-20px',
      },
      size: {
        width: 80,
        height: 100,
      },
      zIndex: 1,
      pixelSize: 8,
    },
    {
      src: '/Cave/pen.svg',
      position: {
        bottom: '0px',
        left: '72px',
      },
      size: {
        width: 80,
        height: 80,
      },
      zIndex: 1,
      pixelSize: 10,
    },
    {
      src: '/Cave/Phone.svg',
      position: {
        top: '20px',
        left: '100px',
      },
      size: {
        width: 80,
        height: 80,
      },
      zIndex: 1,
      pixelSize: 10,
    },
    {
      src: '/Cave/navigation.svg',
      position: {
        top: '10%',
        left: '240px',
      },
      size: {
        width: 70,
        height: 70,
      },
      zIndex: 1,
      pixelSize: 10,
    },
    {
      src: '/Cave/ocean.svg',
      position: {
        top: '40%',
        left: '180px',
      },
      size: {
        width: 100,
        height: 100,
      },
      zIndex: 1,
    },
  {
    src: '/Cave/bird.svg',
    position: {
      top: '20%',
      left: '320px',
    },
    size: {
      width: 72,
      height: 72,
    },
    zIndex: 1,
  },
  {
    src: '/Cave/taxi.svg',
    position: {
      bottom: '10px',
      left: '320px',
    },
    size: {
      width: 100,
      height: 100,
    },
    zIndex: 1,
  },
  {
    src: '/Cave/barter.svg',
    position: {
      top: '28%',
      left: '420px',
    },
    size: {
      width: 50,
      height: 50,
    },
    zIndex: 1,
  },

  {
    src: '/Cave/console.svg',
    position: {
      bottom: '8%',
      left: '460px',
    },
    size: {
      width: 72,
      height: 72,
    },
    zIndex: 1,
    pixelSize: 10,
  },
  {
    src: '/Cave/mind.svg',
    position: {
      top: '10%',
      left: '480px',
    },
    size: {
      width: 180,
      height: 180,
    },
    zIndex: 1,
    pixelSize: 7,
  },
  {
    src: '/Cave/us.svg',
    position: {
      top: '36%',
      left: '640px',
    },
    size: {
      width: 100,
      height: 100,
    },
    zIndex: 1,
    pixelSize: 10,
  },
  {
    src: '/Cave/wafle.svg',
    position: {
      top: '15%',
      left: '740px',
    },
    size: {
      width: 70,
      height: 70,
    },
    zIndex: 1,
    pixelSize: 10,
  },
  {
    src: '/Cave/chips.svg',
    position: {
      bottom: '10%',
      left: '780px',
    },
    size: {
      width: 90,
      height: 90,
    },
    zIndex: 1,
    pixelSize: 10,
  },
  {
    src: '/Cave/tree 2.svg',
    position: {
      top: '5%',
      left: '830px',
    },
    size: {
      width: 100,
      height: 100,
    },
    zIndex: 1,
  },

  {
    src: '/Cave/app store.svg',
    position: {
      bottom: '10%',
      left: '900px',
    },
    size: {
      width: 70,
      height: 70,
    },
    zIndex: 1,
  },
  {
    src: '/Cave/agon.svg',
    position: {
      top: '20%',
      left: '940px',
    },
    size: {
      width: 90,
      height: 90,
    },
    zIndex: 1,
  },
  {
    src: '/Cave/laptop.svg',
    position: {
      top: '10%',
      left: '1040px',
    },
    size: {
      width: 100,
      height: 100,
    },
    zIndex: 1,
  },
  {
    src: '/Cave/hand.svg',
    position: {
      bottom: '10px',
      left: '1000px',
    },
    size: {
      width: 100,
      height: 100,
    },
    zIndex: 1,
  },

  {
    src: '/Cave/squirl.svg',
    position: {
      bottom: '0',
      left: '1120px',
    },
    size: {
      width: 100,
      height: 100,
    },
    zIndex: 1,
  },

];

interface PixelatedImageProps {
  config: ImageConfig;
  pixelSize: number;
  glitchIntensity: number;
  scale: number;
  gradient?: {
    enabled?: boolean;
    type?: 'linear' | 'radial';
    direction?: 'top' | 'bottom' | 'left' | 'right' | 'center';
    intensity?: number;
  };
}

const PixelatedImage: React.FC<PixelatedImageProps> = ({
  config,
  pixelSize,
  glitchIntensity,
  scale,
  gradient,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glitchRef = useRef<GlitchEffect | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas dimensions based on scaled size
    canvas.width = config.size.width * scale;
    canvas.height = config.size.height * scale;

    // Use image-specific pixelSize if provided, otherwise use the global pixelSize
    const imagePixelSize = config.pixelSize !== undefined ? config.pixelSize : pixelSize;

    loadAndPixelateImage(canvas, config.src, { 
      pixelSize: imagePixelSize,
      gradient: gradient || { enabled: true, type: 'radial', direction: 'bottom', intensity: 0.5 }
    })
      .then(() => {
        setIsLoaded(true);
        glitchRef.current = new GlitchEffect(canvas, {
          intensity: glitchIntensity,
          channelShift: 0,
          stripHeight: 10,
        });
        glitchRef.current.captureOriginal();
      })
      .catch((error) => {
        console.error('Failed to load image:', error);
      });

    return () => {
      if (glitchRef.current) {
        glitchRef.current.destroy();
      }
    };
  }, [config.src, config.pixelSize, config.size.width, config.size.height, pixelSize, glitchIntensity, gradient, scale]);

  const handleMouseEnter = () => {
    if (glitchRef.current && isLoaded) {
      glitchRef.current.start();
    }
  };

  const handleMouseLeave = () => {
    if (glitchRef.current) {
      glitchRef.current.stop();
    }
  };

  const transform =
    config.position.top === '50%' && config.position.left === '50%'
      ? 'translate(-10%, -50%)'
      : undefined;

  // Helper function to scale position values
  const scalePosition = (value?: string) => {
    if (!value) return undefined;
    // If it's a percentage, keep it as is
    if (value.includes('%')) return value;
    // If it's pixels, scale it
    const numValue = parseFloat(value);
    return `${numValue * scale}px`;
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'absolute',
        top: scalePosition(config.position.top),
        left: scalePosition(config.position.left),
        right: scalePosition(config.position.right),
        bottom: scalePosition(config.position.bottom),
        width: config.size.width * scale,
        height: config.size.height * scale,
        zIndex: config.zIndex || 1,
        transform,
        cursor: 'pointer',
        imageRendering: 'pixelated',
      }}
      className="transition-opacity duration-300"
    />
  );
};

export default function Cave({ 
  pixelSize = 8, 
  glitchIntensity = 0.7,
  images = defaultImages,
  gradient = { enabled: true, type: 'linear', direction: 'bottom', intensity: 0.6 }
}: CaveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const DESIGN_WIDTH = 1200; // Base width the layout was designed for

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const actualWidth = containerRef.current.offsetWidth;
        const newScale = actualWidth / DESIGN_WIDTH;
        setScale(newScale);
      }
    };

    // Initial scale calculation
    updateScale();

    // Update scale on window resize
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative cave-width h-56"
      style={{
      }}
    >
      {images.map((config, index) => (
        <PixelatedImage
          key={`cave-image-${index}`}
          config={config}
          pixelSize={pixelSize}
          glitchIntensity={glitchIntensity}
          gradient={gradient}
          scale={scale}
        />
      ))}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 1,
        }}
      />
    </div>
  );
}
