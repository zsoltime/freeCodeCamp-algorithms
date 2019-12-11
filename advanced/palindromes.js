import reverse from '../basic/reverse-a-string';

// Return true if the given string is a palindrome.
// Otherwise, return false.

export default function palindrome(str) {
  const cleanString = str.toLowerCase().replace(/[\W+]|_/gi, '');

  return cleanString === reverse(cleanString);
}
