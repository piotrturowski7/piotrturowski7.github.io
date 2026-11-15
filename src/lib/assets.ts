import type { ImageMetadata } from 'astro';

/**
 * Automatyczne wykrywanie grafik z folderu /materialy.
 * Wystarczy wrzucić plik o właściwej nazwie (np. piotr.jpg) i przebudować stronę.
 * Jeśli pliku brakuje, komponent pokazuje placeholder o właściwych proporcjach.
 */
const rasters = import.meta.glob<{ default: ImageMetadata }>(
  '/materialy/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

const svgs = import.meta.glob<string>('/materialy/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const baseName = (path: string) =>
  path.split('/').pop()!.replace(/\.[^.]+$/, '').toLowerCase();

/** Zwraca obraz o podanej nazwie (bez rozszerzenia) albo undefined. */
export function getImage(name: string): ImageMetadata | undefined {
  const key = Object.keys(rasters).find((p) => baseName(p) === name.toLowerCase());
  return key ? rasters[key].default : undefined;
}

/** Surowy kod SVG logo, jeśli istnieje materialy/logo.svg. */
export function getLogoSvg(): string | undefined {
  const key = Object.keys(svgs).find((p) => baseName(p) === 'logo');
  return key ? svgs[key] : undefined;
}
