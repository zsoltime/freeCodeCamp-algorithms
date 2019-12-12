// Compare two arrays and return a new array with any items
// only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the
// two arrays.

export default function diffArray(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].reduce(
    (acc, curr) =>
      arr1.includes(curr) && arr2.includes(curr)
        ? acc
        : [...acc, curr],
    [],
  );
}
