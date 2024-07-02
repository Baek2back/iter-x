/**
 * Return first `n` items of the iterable as a list.
 *
 * @example
 * ```typescript
 * take(3, range(10)) // => [0, 1, 2]
 * ````
 *
 * If there are fewer than `n` items in the iterable, all of them are returned.
 *
 * @example
 * ```typescript
 * take(10, range(10)) // => [0, 1, 2]
 * ````
 *
 */
export function take<T>(n: number, iterable: Iterable<T>): T[] {
  return [...itake(n, iterable)];
}

export function* itake<T>(
  n: number,
  iterable: Iterable<T>,
): IterableIterator<T> {
  const iterator = iterable[Symbol.iterator]();

  let count = n;
  while (count-- > 0) {
    const iteratorResult = iterator.next();
    if (iteratorResult.done) return;
    yield iteratorResult.value;
  }
}
