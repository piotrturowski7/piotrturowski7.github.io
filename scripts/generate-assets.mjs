/**
 * Generuje faviconę, ikony aplikacji i obraz Open Graph (1200×630).
 * Uruchamia się automatycznie przed `npm run dev` i `npm run build` (oraz ręcznie: `npm run assets`).
 *
 * Źródła (folder /materialy):
 *  - favicon.svg / favicon.png (opcjonalnie) – kwadratowy znak; ma pierwszeństwo przy faviconie,
 *  - logo.svg / logo.png – logo; używane w obrazie OG i (gdy brak favicon.*) w faviconie,
 *  - gdy brak logo – zastępczy znak słowny „everhome”.
 */
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');
const mat = join(root, 'materialy');
const require = createRequire(import.meta.url);

const ACCENT = '#7191F9';
const INK = '#0a0a0a';
const HEADLINE = 'Podpisane umowy na domy modułowe. Z\u00A0reklam na Facebooku i\u00A0Instagramie.';
const EYEBROW = 'Meta Ads dla producentów domów modułowych';

const find = (base, exts) => exts.map((e) => join(mat, `${base}.${e}`)).find((p) => existsSync(p));

async function main() {
  mkdirSync(pub, { recursive: true });
  const sharp = (await import('sharp')).default;
  const { default: satori } = await import('satori');
  const { Resvg } = await import('@resvg/resvg-js');

  const font = (w, subset) =>
    readFileSync(require.resolve(`@fontsource/manrope/files/manrope-${subset}-${w}-normal.woff`));
  const fonts = [
    { name: 'Manrope', data: font(600, 'latin'), weight: 600, style: 'normal' },
    { name: 'ManropeExt', data: font(600, 'latin-ext'), weight: 600, style: 'normal' },
    { name: 'Manrope', data: font(700, 'latin'), weight: 700, style: 'normal' },
    { name: 'ManropeExt', data: font(700, 'latin-ext'), weight: 700, style: 'normal' },
  ];
  const h = (type, style, children) => ({ type, props: { style, children } });
  const toPng = (svg, width) => new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().asPng();

  const logoPath = find('logo', ['svg', 'png', 'jpg', 'webp']);
  const iconPath = find('favicon', ['svg', 'png']);

  // ---------- Logo do OG ----------
  let logoNode;
  if (logoPath) {
    const png = await sharp(readFileSync(logoPath), { density: 300 }).resize({ height: 160 }).png().toBuffer();
    const meta = await sharp(png).metadata();
    const height = 64;
    const width = Math.round((meta.width / meta.height) * height);
    logoNode = { type: 'img', props: { src: `data:image/png;base64,${png.toString('base64')}`, width, height } };
  } else {
    logoNode = h('div', { display: 'flex', alignItems: 'flex-end', gap: 8, fontSize: 52, fontWeight: 700, letterSpacing: '-0.04em', color: INK }, [
      h('div', {}, 'everhome'),
      h('div', { width: 15, height: 15, background: ACCENT, marginBottom: 12 }, ''),
    ]);
  }

  // ---------- Obraz OG 1200×630 ----------
  const og = await satori(
    h('div', { width: 1200, height: 630, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', background: '#ffffff', padding: '84px 80px', fontFamily: 'Manrope, ManropeExt' }, [
      logoNode,
      h('div', { display: 'flex', flexDirection: 'column', marginTop: 150 }, [
        h('div', { display: 'flex', alignItems: 'center', gap: 18, fontSize: 24, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: INK }, [
          h('div', { width: 44, height: 4, background: ACCENT }, ''),
          h('div', {}, EYEBROW),
        ]),
        h('div', { marginTop: 28, fontSize: 60, lineHeight: 1.08, fontWeight: 600, letterSpacing: '-0.035em', color: INK, maxWidth: 1000 }, HEADLINE),
      ]),
    ]),
    { width: 1200, height: 630, fonts },
  );
  writeFileSync(join(pub, 'og.png'), await sharp(toPng(og, 1200)).png({ compressionLevel: 9, palette: true }).toBuffer());

  // ---------- Favicona ----------
  let squareSvg; // kwadratowe SVG 512×512
  const srcIcon = iconPath ?? logoPath;
  if (srcIcon) {
    const inner = await sharp(readFileSync(srcIcon), { density: 400 })
      .resize(iconPath ? 512 : 440, iconPath ? 512 : 440, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toBuffer();
    const b64 = inner.toString('base64');
    const off = iconPath ? 0 : 36;
    const size = iconPath ? 512 : 440;
    squareSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" fill="#fff"/><image x="${off}" y="${off}" width="${size}" height="${size}" xlink:href="data:image/png;base64,${b64}"/></svg>`;
  } else {
    // Zastępczy znak: „e” + akcentowy kwadrat
    squareSvg = await satori(
      h('div', { width: 512, height: 512, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', fontFamily: 'Manrope, ManropeExt' }, [
        h('div', { display: 'flex', alignItems: 'flex-end', gap: 14 }, [
          h('div', { fontSize: 420, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.05em', color: INK, marginTop: -60 }, 'e'),
          h('div', { width: 70, height: 70, background: ACCENT, marginBottom: 58 }, ''),
        ]),
      ]),
      { width: 512, height: 512, fonts },
    );
  }

  const png512 = toPng(squareSvg, 512);
  writeFileSync(join(pub, 'favicon.svg'), squareSvg);
  writeFileSync(join(pub, 'icon-512.png'), png512);
  writeFileSync(join(pub, 'icon-192.png'), await sharp(png512).resize(192).png().toBuffer());
  writeFileSync(join(pub, 'apple-touch-icon.png'), await sharp(png512).resize(180).flatten({ background: '#ffffff' }).png().toBuffer());
  writeFileSync(join(pub, 'favicon.ico'), pngToIco(await sharp(png512).resize(32).png().toBuffer(), 32));

  writeFileSync(
    join(pub, 'site.webmanifest'),
    JSON.stringify(
      {
        name: 'everhome',
        short_name: 'everhome',
        lang: 'pl',
        start_url: '/',
        display: 'browser',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      null,
      2,
    ),
  );

  console.log(
    `[assets] Wygenerowano faviconę i og.png (${srcIcon ? `źródło: ${srcIcon.replace(root + '/', '')}` : 'brak logo – znak zastępczy'}).`,
  );
}

/** Pakuje pojedynczy PNG w kontener ICO (format obsługiwany przez wszystkie przeglądarki). */
function pngToIco(png, size) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(size >= 256 ? 0 : size, 6);
  header.writeUInt8(size >= 256 ? 0 : size, 7);
  header.writeUInt8(0, 8);
  header.writeUInt8(0, 9);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(22, 18);
  return Buffer.concat([header, png]);
}

main().catch((err) => {
  // Błąd generowania nie blokuje budowania – zostają poprzednie pliki z /public.
  console.warn('[assets] Nie udało się wygenerować grafik:', err?.message ?? err);
});
