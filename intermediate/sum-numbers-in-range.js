function range(start, end) {
  return Array.from(
    { length: (end - start) + 1 },
    (x, i) => i + start,
  );
}

export default function sumAll(arr) {
  return range(...arr.sort((a, b) => a - b))
    .reduce((sum, val) => sum + val, 0);
}
