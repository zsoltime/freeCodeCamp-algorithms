// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.

export default function chunkArrayInGroups(arr, size) {
  const newArr = [];

  for (let i = 0, max = Math.ceil(arr.length / size); i < max; i += 1) {
    newArr.push(arr.slice(
      0 + (i * size),
      (i * size) + size,
    ));
  }

  return newArr;
}
