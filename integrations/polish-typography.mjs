/**
 * Polska typografia w gotowym HTML (tylko przy `npm run build`):
 * - twarda spacja po jednoliterowych spójnikach i przyimkach (a, i, o, u, w, z), żeby nie zostawały na końcu wiersza,
 * - twarda spacja w liczbach (3 000) i przed „zł”.
 * Zmienia wyłącznie tekst między znacznikami – pomija <script>, <style> i atrybuty.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const NBSP = ' ';
const fixText = (t) => {
  let prev;
  do {
    prev = t;
    t = t.replace(/(^|[\s („])([aiouwzAIOUWZ])\s+/g, `$1$2${NBSP}`);
  } while (t !== prev);
  return t
    .replace(/(\d)\s(\d{3})(?!\d)/g, `$1${NBSP}$2`)
    .replace(/(\d)\s(zł|dni|min)/g, `$1${NBSP}$2`)
    .replace(/\s(–|—)\s/g, `${NBSP}$1 `);
};

export function processHtml(html) {
  return html.replace(/(<(script|style|textarea)\b[\s\S]*?<\/\2>)|>([^<]+)</g, (m, raw, _tag, text) =>
    raw ? raw : `>${fixText(text)}<`,
  );
}

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

export default function polishTypography() {
  return {
    name: 'polish-typography',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const files = await walk(fileURLToPath(dir));
        await Promise.all(files.map(async (f) => writeFile(f, processHtml(await readFile(f, 'utf8')))));
      },
    },
  };
}
