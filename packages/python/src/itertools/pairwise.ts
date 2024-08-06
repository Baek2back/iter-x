import { iter } from "../built-in";

/**
 * @example pairwise('ABCDEFG') -> AB BC CD DE EF FG
 */
export function* pairwise<T>(iterable: Iterable<T>): IterableIterator<[T, T]> {
  const it = iter(iterable);
  let item = it.next();
  let prevValue = item.value;

  if (item.done) return;

  while (true) {
    item = it.next();
    if (item.done) return;
    yield [prevValue, item.value];
    prevValue = item.value;
  }
}
