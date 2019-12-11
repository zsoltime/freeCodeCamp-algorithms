// You will be provided with an initial array (the first
// argument in the destroyer function), followed by one or
// more arguments. Remove all elements from the initial
// array that are of the same value as these arguments.

export default function destroyer(arr, ...args) {
  return arr.filter((val) => !args.includes(val));
}
