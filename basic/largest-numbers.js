export default function largestNumber(arr) {
  return arr.map(subArr => (
    subArr.reduce((max, curr) => (curr > max ? curr : max), 0)
  ));
}
