export default function diffArray(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])]
    .reduce((acc, curr) => (
      arr1.includes(curr) && arr2.includes(curr)
        ? acc
        : [...acc, curr]
    ), []);
}
