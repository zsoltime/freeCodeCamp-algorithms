import test from 'ava';
import destroyer from './seek-destroy';

test('should return an array', (t) => {
  t.true(Array.isArray(destroyer([1, 2, 3], 3)));
});

test('should remove all elements from array that are of the same value as the arguments', (t) => {
  t.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1]);
  t.deepEqual(destroyer([2, 3, 2, 3], 2, 3), []);
  t.deepEqual(destroyer(['tree', 'hamburger', 53], 'tree', 53), ['hamburger']);
});
