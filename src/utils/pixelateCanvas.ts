/**
 * Pixelation utility for Canvas 2D
 * 
 * This function takes image data and creates a pixelated effect by:
 * 1. Sampling pixels at regular intervals (every pixelSize pixels)
 * 2. Filling entire blocks with the sampled color
 * 3. This creates the classic "16-bit" blocky look
 */

export interface PixelateOptions {
  pixelSize?: number; // Size of each pixel block (default: 8)
  gradient?: {
    enabled?: boolean; // Whether to apply gradient (default: false)
    type?: 'linear' | 'radial'; // Type of gradient (default: 'linear')
    direction?: 'top' | 'bottom' | 'left' | 'right' | 'center'; // Direction for linear gradient (default: 'bottom')
    intensity?: number; // How strong the fade is, 0-1 (default: 0.5)
  };
}

/**
 * Applies pixelation effect to a canvas context
 * @param ctx - Canvas 2D context
 * @param width - Canvas width
 * @param height - Canvas height
 * @param options - Pixelation options
 */
export function pixelateCanvas(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  options: PixelateOptions = {}
): void {
  const { pixelSize = 8 } = options;

  // Get the original image data
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;

  // Create a new image data for the pixelated version
  const pixelatedData = ctx.createImageData(width, height);
  const pixelated = pixelatedData.data;

  // Loop through the image in blocks
  for (let y = 0; y < height; y += pixelSize) {
    for (let x = 0; x < width; x += pixelSize) {
      // Sample the color from the center of the block
      const sampleX = Math.min(x + Math.floor(pixelSize / 2), width - 1);
      const sampleY = Math.min(y + Math.floor(pixelSize / 2), height - 1);
      const sampleIndex = (sampleY * width + sampleX) * 4;

      // Get the sampled color
      const r = data[sampleIndex];
      const g = data[sampleIndex + 1];
      const b = data[sampleIndex + 2];
      const a = data[sampleIndex + 3];

      // Fill the entire block with this color
      for (let blockY = 0; blockY < pixelSize && y + blockY < height; blockY++) {
        for (let blockX = 0; blockX < pixelSize && x + blockX < width; blockX++) {
          const pixelIndex = ((y + blockY) * width + (x + blockX)) * 4;
          pixelated[pixelIndex] = r;
          pixelated[pixelIndex + 1] = g;
          pixelated[pixelIndex + 2] = b;
          pixelated[pixelIndex + 3] = a;
        }
      }
    }
  }

  // Draw the pixelated image back to the canvas
  ctx.putImageData(pixelatedData, 0, 0);
}

/**
 * Applies a transparent gradient mask to a canvas
 * This creates a fade-to-transparent effect on the image
 * @param ctx - Canvas 2D context
 * @param width - Canvas width
 * @param height - Canvas height
 * @param options - Gradient options
 */
export function applyGradientMask(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  options: PixelateOptions['gradient'] = {}
): void {
  const {
    type = 'linear',
    direction = 'bottom',
    intensity = 0.5,
  } = options;

  // Create a gradient based on type and direction
  let gradient: CanvasGradient;
  
  if (type === 'radial') {
    // Radial gradient from center - fades from center outward
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.max(width, height) / 2;
    gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    // Start fully opaque (keep image), fade to transparent (hide image)
    gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
    gradient.addColorStop(1, `rgba(0, 0, 0, ${1 - intensity})`);
  } else {
    // Linear gradient
    let x0 = 0, y0 = 0, x1 = 0, y1 = 0;
    
    switch (direction) {
      case 'top':
        // Fade from bottom (opaque) to top (transparent)
        y0 = height;
        y1 = 0;
        break;
      case 'bottom':
        // Fade from top (opaque) to bottom (transparent)
        y0 = 0;
        y1 = height;
        break;
      case 'left':
        // Fade from right (opaque) to left (transparent)
        x0 = width;
        x1 = 0;
        break;
      case 'right':
        // Fade from left (opaque) to right (transparent)
        x0 = 0;
        x1 = width;
        break;
      case 'center':
        // Fade from center outward
        const centerX = width / 2;
        const centerY = height / 2;
        const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
        gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxDist);
        // Center is opaque, edges fade to transparent
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
        gradient.addColorStop(1, `rgba(0, 0, 0, ${1 - intensity})`);
        
        // Apply the gradient as a mask
        ctx.globalCompositeOperation = 'destination-in';
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        ctx.globalCompositeOperation = 'source-over';
        return;
    }
    
    gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    // Start point is fully opaque (keep image), end point fades to transparent (hide image)
    gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
    gradient.addColorStop(1, `rgba(0, 0, 0, ${1 - intensity})`);
  }

  // Apply the gradient as a mask using destination-in composite operation
  // This makes pixels transparent where the gradient is darker
  ctx.globalCompositeOperation = 'destination-in';
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Restore normal composite operation
  ctx.globalCompositeOperation = 'source-over';
}

/**
 * Loads an SVG image and draws it pixelated on a canvas
 * @param canvas - Target canvas element
 * @param imageSrc - Path to the SVG image
 * @param options - Pixelation options
 * @returns Promise that resolves when image is loaded and pixelated
 */
export function loadAndPixelateImage(
  canvas: HTMLCanvasElement,
  imageSrc: string,
  options: PixelateOptions = {}
): Promise<void> {
  return new Promise((resolve, reject) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      reject(new Error('Could not get canvas context'));
      return;
    }

    const img = new Image();
    
    img.onload = () => {
      // Set canvas size to match image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the original image
      ctx.drawImage(img, 0, 0);

      // Apply pixelation
      pixelateCanvas(ctx, img.width, img.height, options);

      // Apply gradient mask if enabled
      if (options.gradient?.enabled) {
        applyGradientMask(ctx, img.width, img.height, options.gradient);
      }

      resolve();
    };

    img.onerror = () => {
      reject(new Error(`Failed to load image: ${imageSrc}`));
    };

    img.src = imageSrc;
  });
}
