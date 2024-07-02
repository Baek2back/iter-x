/**
 * Make an iterator that returns object over and over again.
 * Runs indefinitely unless the times argument is specified.
 *
 * @example
 * ```typescript
 * repeat(2)    // => 2 2 2 ...
 * repeat(2, 3) // => 2 2 2
 * ```
 */
export function* repeat<T>(object: T, times?: number): IterableIterator<T> {
	if (times === undefined) while (true) yield object;
	for (let i = 0; i < times; i++) yield object;
}
