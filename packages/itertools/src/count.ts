/**
 * Returns an iterator that counts up values starting with number `start`.
 * To decrement, use a negative step number.
 *
 * @example
 * ```typescript
 * count(10)       // => 10 11 12 13 14 ...
 * count(10, -1)   // => 10 9 8 7 6 ...
 * count(2.5, 0.5) // => 2.5 3.0 3.5 ...
 * ```
 */
export function* count(start = 0, step = 1): IterableIterator<number> {
  let n = start;
  while (true) {
    yield n;
    n += step;
  }
}
