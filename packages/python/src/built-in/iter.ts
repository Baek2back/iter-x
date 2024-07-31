function isIterable<T = unknown>(
  object: Iterable<T> | Iterator<T>,
): object is Iterable<T> {
  return (
    typeof (object as { [Symbol.iterator]?: unknown })?.[Symbol.iterator] ===
    "function"
  );
}

function isIterator<T = unknown>(
  object: Iterable<T> | Iterator<T>,
): object is Iterator<T> {
  return typeof (object as { next?: unknown })?.next === "function";
}

export function iter<T>(
  iterableOrIterator: Iterable<T> | Iterator<T>,
): Iterator<T> {
  if (isIterator(iterableOrIterator)) {
    return iterableOrIterator;
  }
  if (isIterable(iterableOrIterator)) {
    return iterableOrIterator[Symbol.iterator]();
  }
  throw new TypeError(
    "iter: value `iterableOrIterator` must be type of Iterable | Iterator",
  );
}
