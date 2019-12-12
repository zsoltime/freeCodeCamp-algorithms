// Convert a string to spinal case. Spinal case is
// all-lowercase-words-joined-by-dashes.

export default function spinalCase(str) {
  return str
    .replace(
      /([a-z])([A-Z])/g,
      (matches) => `${matches[0]} ${matches[1]}`,
    )
    .replace(/(\s|_)/g, '-')
    .toLowerCase();
}
