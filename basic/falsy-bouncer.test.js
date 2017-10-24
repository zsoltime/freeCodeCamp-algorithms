import test from 'ava';
import bounce from './falsy-bouncer';

test('should return a boolean', (t) => {
  t.true(Array.isArray(bounce([1, 4, false])));
});

test('should remove all falsy values from an array', (t) => {
  t.deepEqual(bounce([7, 'a', '', false, 9]), [7, 'a', 9]);
  t.deepEqual(bounce(['a', 'b', 'c']), ['a', 'b', 'c']);
  t.deepEqual(bounce([false, null, 0, NaN, undefined, '']), []);
});
