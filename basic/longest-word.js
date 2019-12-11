// Return the length of the longest word in the provided
// sentence. Your response should be a number.

export default function findLongestWord(str) {
  return str
    .split(' ')
    .reduce(
      (maxLength, word) =>
        word.length > maxLength ? word.length : maxLength,
      0,
    );
}
