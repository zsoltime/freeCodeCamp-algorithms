export default function uniteUnique(...arrays) {
  return arrays
    .reduce((a, b) => a.concat(b))
    .reduce((uniques, val) => (
      uniques.includes(val) ? uniques : [...uniques, val]
    ), []);
}
