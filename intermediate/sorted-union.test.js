import test from 'ava';
import union from './sorted-union';

test('should return an array', (t) => {
  t.true(Array.isArray(union([1, 2], [2, 3])));
});

test('should return an array of unique values in the order of the original provided arrays', (t) => {
  t.deepEqual(union([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
  t.deepEqual(union([1, 3, 2], [1, [5]], [2, [4]]), [1, 3, 2, [5], [4]]);
});
