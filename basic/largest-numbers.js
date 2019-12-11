// Return an array consisting of the largest number from
// each provided sub-array. For simplicity, the provided
// array will contain exactly 4 sub-arrays.

export default function largestNumber(arr) {
  const findLargest = (numbers) =>
    numbers.reduce(
      (max, curr) => (curr > max ? curr : max),
      -Infinity,
    );

  return arr.map(findLargest);
}
