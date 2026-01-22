/**
 * Glitch effect utility for Canvas 2D
 * 
 * This creates a glitch effect by:
 * 1. Shifting RGB channels (separating red and blue slightly)
 * 2. Displacing horizontal strips of pixels randomly
 * 3. Using random timing for authentic glitch feel
 */

export interface GlitchOptions {
  intensity?: number; // How strong the glitch is (0-1, default: 0.5)
  channelShift?: number; // How far to shift RGB channels (default: 5)
  stripHeight?: number; // Height of displaced strips (default: 10)
}

export class GlitchEffect {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private originalImageData: ImageData | null = null;
  private isGlitching = false;
  private animationFrameId: number | null = null;
  private glitchTimeout: number | null = null;
  private options: Required<GlitchOptions>;

  constructor(canvas: HTMLCanvasElement, options: GlitchOptions = {}) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Could not get canvas context');
    }
    this.ctx = ctx;
    
    this.options = {
      intensity: options.intensity ?? 0.5,
      channelShift: options.channelShift ?? 5,
      stripHeight: options.stripHeight ?? 10,
    };
  }

  /**
   * Store the current canvas state as the "original" to glitch from
   */
  captureOriginal(): void {
    this.originalImageData = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }

  /**
   * Restore the original image (removes glitch)
   */
  private restoreOriginal(): void {
    if (this.originalImageData) {
      this.ctx.putImageData(this.originalImageData, 0, 0);
    }
  }

  /**
   * Apply RGB channel shift effect
   */
  private applyChannelShift(): void {
    if (!this.originalImageData) return;

    const width = this.canvas.width;
    const height = this.canvas.height;
    const shift = this.options.channelShift;

    // Get fresh copy of original
    const imageData = this.ctx.createImageData(width, height);
    const original = new Uint8ClampedArray(this.originalImageData.data);
    const data = imageData.data;

    // Copy original to new image data
    for (let i = 0; i < data.length; i++) {
      data[i] = original[i];
    }

    // Shift red channel
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const sourceX = x - shift;
        if (sourceX >= 0 && sourceX < width) {
          const targetIndex = (y * width + x) * 4;
          const sourceIndex = (y * width + sourceX) * 4;
          data[targetIndex] = original[sourceIndex]; // Red channel
        }
      }
    }

    // Shift blue channel
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const sourceX = x + shift;
        if (sourceX >= 0 && sourceX < width) {
          const targetIndex = (y * width + x) * 4 + 2;
          const sourceIndex = (y * width + sourceX) * 4 + 2;
          data[targetIndex] = original[sourceIndex]; // Blue channel
        }
      }
    }

    this.ctx.putImageData(imageData, 0, 0);
  }

  /**
   * Apply horizontal strip displacement
   */
  private applyStripDisplacement(): void {
    if (!this.originalImageData) return;

    const width = this.canvas.width;
    const height = this.canvas.height;
    const stripHeight = this.options.stripHeight;

    const imageData = this.ctx.createImageData(width, height);
    const original = this.originalImageData.data;
    const data = imageData.data;

    // Copy original
    for (let i = 0; i < data.length; i++) {
      data[i] = original[i];
    }

    // Randomly displace some horizontal strips
    const numStrips = Math.floor(height / stripHeight);
    const glitchChance = this.options.intensity;

    for (let strip = 0; strip < numStrips; strip++) {
      if (Math.random() < glitchChance) {
        const y = strip * stripHeight;
        const displacement = Math.floor((Math.random() - 0.5) * 20 * this.options.intensity);

        for (let row = 0; row < stripHeight && y + row < height; row++) {
          for (let x = 0; x < width; x++) {
            const sourceX = x - displacement;
            if (sourceX >= 0 && sourceX < width) {
              const targetIndex = ((y + row) * width + x) * 4;
              const sourceIndex = ((y + row) * width + sourceX) * 4;

              data[targetIndex] = original[sourceIndex];
              data[targetIndex + 1] = original[sourceIndex + 1];
              data[targetIndex + 2] = original[sourceIndex + 2];
              data[targetIndex + 3] = original[sourceIndex + 3];
            }
          }
        }
      }
    }

    this.ctx.putImageData(imageData, 0, 0);
  }

  /**
   * Perform one frame of glitch
   */
  private glitchFrame(): void {
    if (!this.isGlitching) return;

    // Randomly choose which effect to apply (removed the restore option for continuous glitch)
    const effect = Math.random();
    
    if (effect < 0.2) {
      this.applyChannelShift();
    } else {
      this.applyStripDisplacement();
    }

    // Use consistent timing for smooth, linear glitch cycles
    const delay = 200; // Fixed 80ms between frames for consistent rhythm
    this.glitchTimeout = window.setTimeout(() => {
      if (this.isGlitching) {
        this.animationFrameId = requestAnimationFrame(() => this.glitchFrame());
      }
    }, delay);
  }

  /**
   * Start the glitch effect
   */
  start(): void {
    if (this.isGlitching) return;

    // Capture current state if not already captured
    if (!this.originalImageData) {
      this.captureOriginal();
    }

    this.isGlitching = true;
    this.glitchFrame();
  }

  /**
   * Stop the glitch effect and restore original
   */
  stop(): void {
    this.isGlitching = false;

    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    if (this.glitchTimeout !== null) {
      clearTimeout(this.glitchTimeout);
      this.glitchTimeout = null;
    }

    this.restoreOriginal();
  }

  /**
   * Clean up resources
   */
  destroy(): void {
    this.stop();
    this.originalImageData = null;
  }
}
