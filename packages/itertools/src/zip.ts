/**
 *
 * @example
 * [...zip([1, 2], [1, 2])] // => [[1, 1], [2, 2]]
 * [...zip([1, 2], [1, 2, 3], { strict: true })] // => Error("zip() argument 2 is longer than argument 1")
 */
export function* zip<T1, T2>(
  xs: Iterable<T1>,
  ys: Iterable<T2>,
  options: { strict?: boolean } = {},
): IterableIterator<[T1, T2]> {
  const { strict = false } = options;

  const [ixs, iys] = [xs[Symbol.iterator](), ys[Symbol.iterator]()];

  while (true) {
    const [x, y] = [ixs.next(), iys.next()];
    if (!x.done && !y.done) {
      yield [x.value, y.value];
    } else {
      if (strict) {
        throw new Error(
          `zip() argument ${x.done ? 2 : 1} is longer than argument ${
            x.done ? 1 : 2
          }`,
        );
      }
      return;
    }
  }
}
