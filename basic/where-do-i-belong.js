// Return the lowest index at which a value (second
// argument) should be inserted into an array (first
// argument) once it has been sorted. The returned value
// should be a number.

export default function getIndexToIns(arr, num) {
  return [...arr, num]
    .sort((a, b) => a - b)
    .findIndex((val) => val === num);
}
