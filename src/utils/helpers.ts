export function getImageUrl(name: string) {
  return new URL(`@/assets/images/${name}.png`, import.meta.url).href;
}
