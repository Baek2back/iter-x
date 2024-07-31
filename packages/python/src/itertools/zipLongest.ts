import { iter } from "../built-in";

export function* zipLongest<T1, T2, D>(
  xs: Iterable<T1>,
  ys: Iterable<T2>,
  options: { fillvalue?: D } = {},
): IterableIterator<[T1 | D, T2 | D]> {
  const { fillvalue } = options;
  const [ixs, iys] = [iter(xs), iter(ys)];

  while (true) {
    const [x, y] = [ixs.next(), iys.next()];

    if (x.done && y.done) {
      return;
    }

    yield [
      !x.done ? x.value : (fillvalue as D),
      !y.done ? y.value : (fillvalue as D),
    ];
  }
}
