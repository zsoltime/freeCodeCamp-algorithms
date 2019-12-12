// Find the smallest common multiple of the provided
// parameters that can be evenly divided by both, as well as
// by all sequential numbers in the range between these
// parameters. The range will be an array of two numbers
// that will not necessarily be in numerical order.

function range(start, end) {
  const min = start > end ? end : start;
  const max = start > end ? start : end;

  return Array.from({ length: max - min + 1 }, (_, i) => i + min);
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
  if (!a || !b) {
    return 0;
  }
  return (a * b) / greatestCommonDivisor(a, b);
}

function recursiveLcm(arr) {
  let rest;
  // eslint-disable-next-line no-multi-assign
  const [a, b] = ([, ...rest] = arr);

  return arr.length === 2
    ? leastCommonMultiple(a, b)
    : leastCommonMultiple(a, recursiveLcm(rest));
}

export default function smallestCommons(arr) {
  return recursiveLcm(range(...arr));
}
