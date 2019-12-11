import test from 'ava';
import getIndex from './where-do-i-belong';

test('should return a number', (t) => {
  t.is(typeof getIndex([10, 30, 50], 3), 'number');
});

test('should return the lowest index at which a value should be inserted into an array once it has been sorted', (t) => {
  t.is(getIndex([1, 2, 3, 4], 1.5), 1);
  t.is(getIndex([3, 10, 5], 3), 0);
  t.is(getIndex([2, 5, 10], 15), 3);
  t.is(getIndex([], 3), 0);
});
