import test from 'ava';
import isPalindrome from './palindromes';

test('should return a boolean', (t) => {
  t.is(typeof isPalindrome('test'), 'boolean');
});

test('should return true if string is palindrome', (t) => {
  t.true(isPalindrome('eye'));
});

test('should return false if string is not a palindrome', (t) => {
  t.false(isPalindrome('eyecare'));
});

test('should ignore non-alphanumeric characters', (t) => {
  t.true(isPalindrome('_eye'));
  t.true(isPalindrome('race >>> car?'));
});

test('should be case-insensitive', (t) => {
  t.true(isPalindrome('A man, a plan, a canal. Panama.'));
});
