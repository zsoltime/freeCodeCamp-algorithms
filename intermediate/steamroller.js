// Flatten a nested array. You must account for varying
// levels of nesting.

export default function steamrollArray(arr, res = []) {
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      steamrollArray(arr[i], res);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
