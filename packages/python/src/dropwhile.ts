import { iter } from "./iter";

/**
 * @example dropwhile((x) => x < 5, [1,4,6,3,8]) // => 6 3 8
 */
export function* dropwhile<T>(
  predicate: (item: T) => boolean,
  iterable: Iterable<T>,
) {
  const it = iter(iterable);
  let item = it.next();

  while (!item.done) {
    if (!predicate(item.value)) break;
    item = it.next();
  }

  while (!item.done) {
    yield item.value;
    item = it.next();
  }
}
