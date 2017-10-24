import test from 'ava';
import chunk from './chunky-monkey';

test('should return an array', (t) => {
  t.true(Array.isArray(chunk([0, 1, 2, 3, 4], 2)));
});

test('should split the array into groups with the length given in second arg', (t) => {
  t.deepEqual(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']]);
  t.deepEqual(chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
});
