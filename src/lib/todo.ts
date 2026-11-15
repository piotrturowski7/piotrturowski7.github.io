import { TODO } from '../content/site';

/** Dzieli tekst na fragmenty, oznaczając miejsca [DO UZUPEŁNIENIA]. */
export function splitTodo(text: string): { text: string; todo: boolean }[] {
  return text
    .split(TODO)
    .flatMap((part, i, arr) =>
      i < arr.length - 1 ? [{ text: part, todo: false }, { text: TODO, todo: true }] : [{ text: part, todo: false }],
    )
    .filter((p) => p.text !== '');
}
