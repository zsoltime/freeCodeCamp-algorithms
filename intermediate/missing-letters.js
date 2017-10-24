export default function missingLetter(str) {
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < str.length; i++) {
    const next = str.charCodeAt(i - 1) + 1;

    if (str.charCodeAt(i) !== next) {
      return String.fromCharCode(next);
    }
  }
  return undefined;
}
