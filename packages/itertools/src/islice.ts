import { iter } from "./iter";

/**
 * @example
 * islice("ABCDEFG", 2) // => A B
 * islice("ABCDEFG", 2, 4) // => C D
 * islice("ABCDEFG", 2, null) // => C D E F G
 * islice("ABCDEFG", 0, null, 2) // => A C E G
 */
export function islice<T>(
  iterable: Iterable<T>,
  stop: number,
): IterableIterator<T>;
export function islice<T>(
  iterable: Iterable<T>,
  start: number,
  stop?: number | null,
  step?: number,
): IterableIterator<T>;
export function* islice<T>(
  iterable: Iterable<T>,
  stopOrStart: number,
  possiblyStop?: number | null,
  step = 1,
): IterableIterator<T> {
  let start: number;
  let stop: number | null;

  if (possiblyStop !== undefined) {
    [start, stop] = [stopOrStart, possiblyStop];
  } else {
    start = 0;
    stop = stopOrStart;
  }

  if (start < 0) throw new Error("start must be positive");
  if (stop !== null && stop < 0) throw new Error("stop must be positive");
  if (step <= 0) throw new Error("step must be positive");

  let index = -1;
  const iterator = iter(iterable);
  let item: IteratorResult<T>;
  while (true) {
    index++;
    if (stop !== null && index >= stop) return;

    item = iterator.next();
    if (item.done) return;

    if (index < start) continue;
    if ((index - start) % step === 0) {
      yield item.value;
    }
  }
}
