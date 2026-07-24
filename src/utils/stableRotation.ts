export function stableRotation(seed: string, min = -4, max = 4) {
  let hash = 0;

  for (const character of seed) {
    hash = (hash * 31 + character.charCodeAt(0)) | 0;
  }

  const range = max - min + 1;
  return min + (Math.abs(hash) % range);
}
