/**
 * Return an flatten iterator only one level of nesting in iterables of iterables
 *
 * @example
 * flatten([[0, 1], [2, 3]]) // => 0 1 2 3
 */
export function* flatten<T>(
  nestedIterables: Iterable<Iterable<T>>,
): IterableIterator<T> {
  for (const iterable of nestedIterables) {
    for (const it of iterable) {
      yield it;
    }
  }
}
