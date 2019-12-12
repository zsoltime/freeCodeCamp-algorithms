import test from 'ava';
import drop from './drop-it';

test('should return an array', (t) => {
  t.true(Array.isArray(drop([0, 1, 2], (f) => f)));
});

test('should drop the head elements of an array until the function in 2nd arg return true', (t) => {
  t.deepEqual(
    drop([0, 1, 2, 3, 4], (n) => n >= 3),
    [3, 4],
  );
  t.deepEqual(
    drop([0, 1, 0, 1], (n) => n === 1),
    [1, 0, 1],
  );
  t.deepEqual(
    drop([0, 1, 2], (n) => n >= 0),
    [0, 1, 2],
  );
  t.deepEqual(
    drop([0, 1, 2], (n) => n > 3),
    [],
  );
});
