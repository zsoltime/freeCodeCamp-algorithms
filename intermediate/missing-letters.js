// Find the missing letter in the passed letter range and
// return it. If all letters are present in the range,
// return undefined.

export default function missingLetter(str) {
  for (let i = 1; i < str.length; i += 1) {
    const next = str.charCodeAt(i - 1) + 1;

    if (str.charCodeAt(i) !== next) {
      return String.fromCharCode(next);
    }
  }
  return undefined;
}
