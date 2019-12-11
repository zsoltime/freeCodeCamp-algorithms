// Create a function that looks through an array (first
// argument) and returns the first element in the array that
// passes a truth test (second argument).

export default function findElement(arr, func) {
  return arr.filter(func)[0];
}
