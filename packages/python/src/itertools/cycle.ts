/**
 * Make an iterator returning elements from the iterable and saving a copy of each.
 * When the iterable is exhausted, return elements from the saved copy.
 *
 * @example
 * ```typescript
 * cycle('ABCD') -> A B C D A B C D A B C D ...
 * cycle([1, 2, 3, 4]) -> 1 2 3 4 1 2 3 4 1 2 3 4 ...
 * ```
 */
export function* cycle<T>(iterable: Iterable<T>): IterableIterator<T> {
  const saved = [];

  for (const element of iterable) {
    yield element;
    saved.push(element);
  }

  while (saved.length > 0) {
    for (const element of saved) {
      yield element;
    }
  }
}
