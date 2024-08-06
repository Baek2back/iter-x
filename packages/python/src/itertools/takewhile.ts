/**
 * @example
 * takewhile((x) => x < 5, [1,4,6,3,8]) -> 1 4
 */
export function* takewhile<T>(
  predicate: (item: T) => boolean,
  iterable: Iterable<T>,
): IterableIterator<T> {
  for (const x of iterable) {
    if (!predicate(x)) break;
    yield x;
  }
}
