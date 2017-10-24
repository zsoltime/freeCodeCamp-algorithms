import test from 'ava';
import missing from './missing-letters';

test('should return a string if there is a missing letter', (t) => {
  t.is(typeof missing('abd'), 'string');
});

test('should return undefined if all letters are present in the range', (t) => {
  t.is(typeof missing('abc'), 'undefined');
});

test('should return the missing letter in the passed letter range', (t) => {
  t.is(missing('abd'), 'c');
  t.is(missing('hijklmnpqrs'), 'o');
});
