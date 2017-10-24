export default function findLongestWord(str) {
  return str
    .split(' ')
    .reduce((maxLength, word) => (
      word.length > maxLength ? word.length : maxLength
    ), 0);
}
