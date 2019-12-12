import test from 'ava';
import frankenSplice from './slice-and-splice';

test('should return an array', (t) => {
  t.true(Array.isArray(frankenSplice([1, 2], [2, 3], 2)));
});

test('should return the copied elements in the correct order', (t) => {
  let actual = frankenSplice([1, 2, 3], [4, 5], 1);
  let expected = [4, 1, 2, 3, 5];

  t.deepEqual(actual, expected);

  actual = frankenSplice([1, 2], ['a', 'b'], 1);
  expected = ['a', 1, 2, 'b'];

  t.deepEqual(actual, expected);

  actual = frankenSplice(
    ['claw', 'tentacle'],
    ['head', 'shoulders', 'knees', 'toes'],
    2,
  );
  expected = [
    'head',
    'shoulders',
    'claw',
    'tentacle',
    'knees',
    'toes',
  ];

  t.deepEqual(actual, expected);
});

test('arguments should remain the same', (t) => {
  const a = [1, 2, 3];
  const aCopy = [...a];
  const b = [4, 5];
  const bCopy = [...b];
  const n = 1;

  frankenSplice(a, b, n);

  t.deepEqual(a, aCopy);
  t.deepEqual(b, bCopy);
});
