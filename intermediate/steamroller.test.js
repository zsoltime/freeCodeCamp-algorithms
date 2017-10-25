import test from 'ava';
import flatten from './steamroller';

test('should return an array', (t) => {
  t.true(Array.isArray(flatten([])));
});

test('should flatten an array', (t) => {
  t.deepEqual(flatten([[['a']], [['b']]]), ['a', 'b']);
  t.deepEqual(flatten([[0], 1, [2], [3, [[4]]]]), [0, 1, 2, 3, 4]);
  t.deepEqual(flatten([1, 3, [], [5]]), [1, 3, 5]);
  t.deepEqual(flatten([1, 3, {}, [5]]), [1, 3, {}, 5]);
});
