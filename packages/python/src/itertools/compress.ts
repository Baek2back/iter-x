import { zip } from "../built-in";

/**
 * Compress an iterable by filter out data that is not selected.
 * @example
 * compress('ABCDEF', [1,0,1,0,1,1]) // => A C E F
 */
export function* compress<T>(
  data: Iterable<T>,
  selectors: Iterable<number | boolean>,
): IterableIterator<T> {
  for (const [d, selector] of zip(data, selectors)) {
    if (selector) {
      yield d;
    }
  }
}
