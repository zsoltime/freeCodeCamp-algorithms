// We'll pass you an array of two numbers. Return the sum of
// those two numbers and all numbers between them. The
// lowest number will not always come first.

// Generates an array of integers from `start` to `end`. It
// does include both `start` and `end` in the output.
function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}

export default function sumAll(arr) {
  const numbers = range(...arr.sort((a, b) => a - b));
  return numbers.reduce((sum, val) => sum + val, 0);
}
