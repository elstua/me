# Cave Component - Pixelated Hero Section

## Overview

The Cave component creates an interactive pixelated hero section with glitch effects on hover. It uses Canvas 2D API to render SVG images with a retro "16-bit" pixelated look.

## How It Works

### 1. **Pixelation Effect** (`src/utils/pixelateCanvas.ts`)
- Loads SVG images onto a canvas
- Samples pixels at regular intervals (every 8x8 pixels by default)
- Fills blocks with sampled colors to create the pixelated look
- No WebGL or complex shaders needed - just Canvas 2D API!

### 2. **Glitch Effect** (`src/utils/glitchEffect.ts`)
- **RGB Channel Shift**: Separates red and blue channels slightly
- **Strip Displacement**: Randomly shifts horizontal slices of pixels
- **Random Timing**: Glitches occur at random intervals for authentic feel
- Activates on hover, restores original on mouse leave

### 3. **Main Component** (`src/Cave.tsx`)
- Renders multiple canvas elements positioned absolutely
- Each canvas shows one pixelated SVG
- Handles hover events to trigger glitch effects
- Fully responsive and customizable

## Usage

### Basic Usage

```typescript
import Cave from './Cave';

function MyComponent() {
  return <Cave />;
}
```

This will display the default Person.svg image centered in the hero section.

### Custom Configuration

```typescript
import Cave from './Cave';

const customImages = [
  {
    src: '/Cave/Person.svg',
    position: { top: '30%', left: '20%' },
    size: { width: 200, height: 300 },
    zIndex: 2,
  },
  {
    src: '/Cave/AnotherImage.svg',
    position: { top: '50%', right: '15%' },
    size: { width: 250, height: 350 },
    zIndex: 1,
  },
  {
    src: '/Cave/ThirdImage.svg',
    position: { bottom: '10%', left: '50%' },
    size: { width: 180, height: 280 },
    zIndex: 3,
  },
];

function MyComponent() {
  return (
    <Cave 
      images={customImages}
      pixelSize={10}
      glitchIntensity={0.7}
    />
  );
}
```

## Props

### `pixelSize` (optional)
- **Type**: `number`
- **Default**: `8`
- **Description**: Size of each pixel block. Larger values = more pixelated

### `glitchIntensity` (optional)
- **Type**: `number`
- **Default**: `0.5`
- **Range**: `0-1`
- **Description**: How strong the glitch effect is. Higher = more intense

### `images` (optional)
- **Type**: `ImageConfig[]`
- **Default**: Single Person.svg centered
- **Description**: Array of images to display

#### ImageConfig Object

```typescript
{
  src: string;              // Path to SVG (relative to public folder)
  position: {               // Absolute positioning
    top?: string;           // e.g., "50%", "100px"
    left?: string;
    right?: string;
    bottom?: string;
  };
  size: {
    width: number;          // Width in pixels
    height: number;         // Height in pixels
  };
  zIndex?: number;          // Stacking order (optional)
}
```

## Adding New SVGs

1. **Place SVG files** in `public/Cave/` folder
2. **Configure the images** in your component:

```typescript
const myImages = [
  {
    src: '/Cave/MyNewImage.svg',
    position: { top: '40%', left: '30%' },
    size: { width: 300, height: 400 },
  },
];

<Cave images={myImages} />
```

## Tips for Best Results

### Image Positioning
- Use percentage positioning for responsive layouts
- Center images with `top: '50%', left: '50%'` (auto-centered)
- Layer images using `zIndex` for depth

### Pixel Size
- **Small pixels (4-6)**: More detail, subtle effect
- **Medium pixels (8-10)**: Classic retro look
- **Large pixels (12-16)**: Very blocky, abstract

### Glitch Intensity
- **Low (0.2-0.4)**: Subtle, professional
- **Medium (0.5-0.7)**: Noticeable, engaging
- **High (0.8-1.0)**: Dramatic, intense

### Performance
- Keep image count reasonable (3-5 images)
- Use appropriately sized SVGs (don't load huge files)
- Canvas 2D handles multiple images well at typical screen sizes

## Example: Scattered Layout

```typescript
const scatteredImages = [
  {
    src: '/Cave/Person.svg',
    position: { top: '20%', left: '10%' },
    size: { width: 180, height: 250 },
    zIndex: 3,
  },
  {
    src: '/Cave/Object1.svg',
    position: { top: '60%', right: '20%' },
    size: { width: 150, height: 200 },
    zIndex: 1,
  },
  {
    src: '/Cave/Object2.svg',
    position: { top: '40%', left: '60%' },
    size: { width: 200, height: 180 },
    zIndex: 2,
  },
];

<Cave images={scatteredImages} pixelSize={8} glitchIntensity={0.6} />
```

## Troubleshooting

### Images not loading
- Check that SVG files are in `public/Cave/` folder
- Verify the `src` path starts with `/Cave/`
- Check browser console for errors

### Pixelation not working
- Ensure canvas has proper size
- Check that SVG loaded successfully
- Try increasing `pixelSize` to see effect more clearly

### Glitch effect not triggering
- Hover over the canvas element (cursor should show as pointer)
- Check browser console for JavaScript errors
- Try increasing `glitchIntensity`

## Technical Details

**Why Canvas 2D instead of WebGL shaders?**
- Simpler to understand and modify
- No complex shader code needed
- Direct pixel manipulation
- Good performance for 2-3 images
- Works everywhere without WebGL support

**Browser Support**
- All modern browsers support Canvas 2D API
- Works on mobile devices
- No special dependencies or polyfills needed
