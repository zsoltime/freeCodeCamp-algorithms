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
