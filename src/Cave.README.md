# Cave homepage

`src/Cave.tsx` renders the interactive Three.js scene used on the homepage.

## Scene

- Procedurally textured and displaced stone wall, surrounding rocks, and floor
- Existing SVG artwork conformed to the wall geometry and weathered with canvas masks
- Original warm off-white light theme and firelit dark theme, persisted in local storage
- Stone firepit in both themes; flames, embers, glow, and firelight only in the dark theme
- Pointer drag with damped camera movement
- Temporary camera setup sliders with copyable yaw, pitch, distance, target, and FOV values
- Raycast painting hover states with contextual labels
- Responsive camera and scene positions for desktop and mobile
- Reduced-motion support and a CSS fallback when WebGL is unavailable

## Editing

The `paintings` array controls each drawing's asset, position, size, rotation, and hover copy. Assets remain in `public/Cave/`.

`src/Cave.css` contains both the scene UI and homepage layout styles. `src/main.tsx` owns the original bio, contact links, and personal details rendered over the scene.

The scene disposes its geometries, materials, textures, observers, listeners, and renderer when the React component unmounts.
