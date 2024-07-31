import { iter } from "./iter";

/**
 * @example
 * ```typescript
 * batched('ABCDEFG', 3) // => ABC DEF G
 * ```
 */
export function* batched<T>(
  iterable: Iterable<T>,
  n: number,
  options: { strict?: boolean } = {},
): IterableIterator<T[]> {
  const { strict = false } = options;

  if (n < 1) {
    throw new Error("n must be at least one");
  }

  const iterator = iter(iterable);

  while (true) {
    const batch: T[] = [];
    for (let i = 0; i < n; i++) {
      const { value, done } = iterator.next();
      if (done) {
        if (batch.length === 0) {
          return;
        }
        if (strict && batch.length !== n) {
          throw new Error("batched(): incomplete batch");
        }
        yield batch;
        return;
      }
      batch.push(value);
    }
    yield batch;
  }
}
