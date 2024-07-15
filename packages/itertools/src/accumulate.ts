import { iter } from "./iter";

type Reducer<T, U> = (acc: U, item: T) => U;

/**
 *
 * @example
 * ```typescript
 * accumulate([1,2,3,4,5], (a, b) => a + b, 100) // => 100 101 103 106 110 115
 * accumulate([1,2,3,4,5], (a, b) => a * b) // => 1 2 6 24 120
 * ```
 */

export function* accumulate<T, U = T>(
  iterable: Iterable<T>,
  func: Reducer<T, U>,
  initial?: U,
): IterableIterator<U> {
  const iterator = iter(iterable);
  let accumulator: U;

  if (initial === undefined) {
    const first = iterator.next();
    if (first.done) return;
    accumulator = first.value as unknown as U;
  } else {
    accumulator = initial;
  }

  yield accumulator;

  while (true) {
    const item = iterator.next();
    if (item.done) break;
    accumulator = func(accumulator, item.value);
    yield accumulator;
  }
}
