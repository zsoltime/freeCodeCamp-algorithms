// Given an array arr, find element pairs whose sum equal
// the second argument arg and return the sum of their
// indices. If multiple pairs are possible that have the
// same numeric elements but different indices, return the
// smallest sum of indices.Once an element has been used, it
// cannot be reused to pair with another.

export default function pairwise(arr, arg) {
  const copy = arr.slice();
  let sum = 0;

  for (let i = 0; i < copy.length; i += 1) {
    const idx = copy.indexOf(arg - copy[i], i + 1);

    if (idx > -1) {
      sum += i + idx;
      copy[idx] = NaN;
    }
  }
  return sum;
}
