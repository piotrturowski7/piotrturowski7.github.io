/**
 * Wypisuje wszystko, co trzeba uzupełnić przed publikacją:
 * miejsca [DO UZUPEŁNIENIA], puste ustawienia w src/config.ts, brakujące grafiki i linki do wideo.
 * Użycie: npm run todo
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const rel = (p) => p.replace(root + '/', '');
const items = [];

for (const file of ['src/content/site.ts', 'src/content/polityka-prywatnosci.md']) {
  readFileSync(join(root, file), 'utf8').split('\n').forEach((line, i) => {
    if (/\$\{TODO\}|:\s*TODO,|\[DO UZUPEŁNIENIA\]/.test(line) && !/export const TODO|Missing:|^\s*Usuń/.test(line) && !/^\s*(\*|\/\/)/.test(line))
      items.push(`${file}:${i + 1}  [DO UZUPEŁNIENIA]  ${line.trim().slice(0, 90)}`);
    if (/videoUrl:\s*''/.test(line)) items.push(`${file}:${i + 1}  brak linku do wideo (videoUrl)`);
  });
}

readFileSync(join(root, 'src/config.ts'), 'utf8').split('\n').forEach((line, i) => {
  const m = line.match(/export const (\w+) = ''/);
  if (m) items.push(`src/config.ts:${i + 1}  puste ustawienie ${m[1]}`);
});

const files = existsSync(join(root, 'materialy')) ? readdirSync(join(root, 'materialy')).map((f) => f.toLowerCase()) : [];
const has = (base) => files.some((f) => f.replace(/\.[^.]+$/, '') === base);
for (const base of ['logo', 'piotr', 'case-wyniki-1', 'case-wyniki-2', 'reklama-1', 'reklama-2', 'reklama-3'])
  if (!has(base)) items.push(`materialy/  brak pliku ${base}.*`);

console.log(items.length ? `Do uzupełnienia przed publikacją (${items.length}):\n\n- ${items.join('\n- ')}` : 'Wszystko uzupełnione.');
