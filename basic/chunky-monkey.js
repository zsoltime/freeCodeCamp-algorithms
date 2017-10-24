export default function chunkArrayInGroups(arr, size) {
  const newArr = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0, max = Math.ceil(arr.length / size); i < max; i++) {
    newArr.push(arr.slice(
      0 + (i * size),
      (i * size) + size,
    ));
  }

  return newArr;
}
