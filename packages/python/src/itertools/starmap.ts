/**
 * @example
 * ```typescript
 * starmap(pow, [[2,5], [3,2], [10,3]]) // => 32 9 1000
 * ```
 */
export function* starmap<T extends unknown[], R>(
  func: (...args: T) => R,
  iterable: Iterable<T>,
): IterableIterator<R> {
  for (const args of iterable) {
    yield func(...args);
  }
}
