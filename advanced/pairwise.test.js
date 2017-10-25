import test from 'ava';
import pairwise from './pairwise';

test('should return a number', (t) => {
  t.is(typeof pairwise([1, 2, 3], 2), 'number');
});

test('should find element pairs whose sum equal the second arg', (t) => {
  t.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
  t.deepEqual(pairwise([1, 3, 2, 4], 4), 1);
  t.deepEqual(pairwise([], 100), 0);
});

test('should return the smallest sum of indices if multiple pairs are possible', (t) => {
  t.deepEqual(pairwise([1, 1, 1], 2), 1);
  t.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
});
