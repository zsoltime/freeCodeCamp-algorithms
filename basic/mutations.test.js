import test from 'ava';
import isMutation from './mutations';

test('should return a boolean', (t) => {
  t.is(typeof isMutation(['Hey', 'hello']), 'boolean');
});

test('should return true if all of the letters in the second string are present in the first', (t) => {
  t.true(isMutation(['hello', 'hello']));
  t.true(isMutation(['floor', 'for']));
  t.true(isMutation(['alien', 'linen']));
});

test('should be case-insensitive', (t) => {
  t.true(isMutation(['Mary', 'army']));
});

test('should return false if the first string does not contain every character from the second', (t) => {
  t.false(isMutation(['hello', 'hey']));
});
