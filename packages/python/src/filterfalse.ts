/**
 * @example
 * filterfalse((x) => x < 5, [1, 4, 6, 3, 8]) // => 6 8
 */
export function filterfalse<T, U extends T>(
  iterable: Iterable<T>,
  predicate?: (item: T) => item is U,
): IterableIterator<U>;
export function filterfalse<T>(
  iterable: Iterable<T>,
  predicate?: (item: T) => boolean,
): IterableIterator<T>;
export function* filterfalse<T>(
  iterable: Iterable<T>,
  predicate?: (item: T) => boolean,
): IterableIterator<T> {
  for (const it of iterable) {
    if (!(predicate ?? Boolean)(it)) {
      yield it;
    }
  }
}
