import test from 'ava';
import diff from './symmetric-difference';

test('should return an array', (t) => {
  t.true(Array.isArray(diff([1, 2, 3], [3, 4])));
});

test('should return the symmetric difference of the provided arrays', (t) => {
  t.deepEqual(diff([1, 2, 3], [5, 2, 1, 4]), [3, 5, 4]);
  t.deepEqual(diff([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5]);
  t.deepEqual(diff([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5]);
  t.deepEqual(diff([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), [7, 4, 6, 2, 3]);
});
