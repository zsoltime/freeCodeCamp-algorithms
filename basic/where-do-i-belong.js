export default function getIndexToIns(arr, num) {
  return [...arr, num]
    .sort((a, b) => a - b)
    .findIndex(val => val === num);
}
