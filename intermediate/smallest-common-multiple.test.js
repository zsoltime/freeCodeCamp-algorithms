import test from 'ava';
import smallestCommons from './smallest-common-multiple';

test('should return a number', (t) => {
  t.is(typeof smallestCommons([1, 5]), 'number');
});

test('should return the smallest common multiple of the numbers provided', (t) => {
  t.is(smallestCommons([1, 5]), 60);
  t.is(smallestCommons([1, 12]), 27720);
});

test('should return the smallest common multiple regardless of the order of numbers', (t) => {
  t.is(smallestCommons([5, 1]), 60);
  t.is(smallestCommons([23, 18]), 6056820);
});
