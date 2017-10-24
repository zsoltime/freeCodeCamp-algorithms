export default function rot13(str) {
  return str.split('')
    .reduce((word, letter) => {
      const original = letter.charCodeAt(0);
      const shifted = original + 13;

      if (original < 65 || original > 90) {
        return word + letter;
      }

      return shifted > 90
        ? word + String.fromCharCode(64 + (shifted % 90))
        : word + String.fromCharCode(shifted);
    }, '');
}
