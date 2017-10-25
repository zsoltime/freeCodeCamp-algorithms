function range(start, end) {
  const min = start > end ? end : start;
  const max = start > end ? start : end;

  return Array.from(
    { length: (max - min) + 1 },
    (x, i) => i + min,
  );
}

function greatestCommonDivisor(a, b) {
  while (b > 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function leastCommonMultiple(a, b) {
  return (!a || !b) ? 0 : ((a * b) / greatestCommonDivisor(a, b));
}

function recursiveLcm(arr) {
  var a, b, rest;
  [a, b] = [, ...rest] = arr;

  return (arr.length === 2)
    ? leastCommonMultiple(a, b)
    : leastCommonMultiple(a, recursiveLcm(rest));
}

export default function smallestCommons(arr) {
  return recursiveLcm(range(...arr));
}
