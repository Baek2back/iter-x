import { flatten } from "./flatten";

/**
 * Make an iterator that returns elements from the first iterable until it is exhausted, then proceeds to the next iterable,
 * until all of the iterables are exhausted. Used for treating consecutive sequences as a single sequence.
 *
 * @example
 * chain("ABC", "DEF") // => A B C D E F
 */
export function chain<T>(...iterables: Iterable<T>[]): IterableIterator<T> {
  return flatten(iterables);
}
