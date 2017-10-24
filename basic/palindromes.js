import reverse from './reverse-a-string';

export default function palindrome(str) {
  const cleanString = str
    .toLowerCase()
    .replace(/[\W+]|_/gi, '');

  return (cleanString === reverse(cleanString));
}
