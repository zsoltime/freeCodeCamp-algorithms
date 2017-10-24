import test from 'ava';
import largest from './largest-numbers';

test('should return an array', (t) => {
  t.true(Array.isArray(largest([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
  ])));
});

test('should return an array of the largest number from each provided sub-array', (t) => {
  const actual = largest([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ]);
  const expected = [27, 5, 39, 1001];

  t.deepEqual(actual, expected);
});
