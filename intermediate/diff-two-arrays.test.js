import test from 'ava';
import diff from './diff-two-arrays';

test('should return an array', (t) => {
  t.true(Array.isArray(diff([1, 2, 3, 5], [1, 2, 3, 4, 5])));
});

test('should return an array with any items only found in one of the two given arrays but not both', (t) => {
  t.deepEqual(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4]);
  t.deepEqual(diff(['a', 'b', 'c', 'd', 'e'], ['f', 'a', 'b', 'c', 'e']), ['d', 'f']);
  t.deepEqual(diff([], [1, 2, 3]), [1, 2, 3]);
  t.deepEqual(diff([1, 2], [3, 4]), [1, 2, 3, 4]);
});
