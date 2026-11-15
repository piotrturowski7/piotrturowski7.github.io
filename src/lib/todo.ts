import * as site from '../content/site';

const MARKER = '[DO UZUPEŁNIENIA]';

/**
 * Dzieli tekst na fragmenty, oznaczając miejsca [DO UZUPEŁNIENIA].
 * Pusty lub brakujący tekst zamienia na żółte [DO UZUPEŁNIENIA] zamiast przerywać budowanie strony.
 */
export function splitTodo(text: unknown): { text: string; todo: boolean }[] {
  const marker = typeof site.TODO === 'string' && site.TODO ? site.TODO : MARKER;
  const value = typeof text === 'string' ? text : '';
  if (!value.trim()) return [{ text: marker, todo: true }];
  return value
    .split(marker)
    .flatMap((part, i, arr) =>
      i < arr.length - 1 ? [{ text: part, todo: false }, { text: marker, todo: true }] : [{ text: part, todo: false }],
    )
    .filter((p) => p.text !== '');
}
