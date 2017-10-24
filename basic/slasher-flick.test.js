import test from 'ava';
import slasher from './slasher-flick';

test('should return an array', (t) => {
  t.true(Array.isArray(slasher([1, 2, 3], 2)));
});

test('should return the remaining elements of an array after chopping off `n` elements from the head', (t) => {
  t.deepEqual(slasher([1, 2, 3], 0), [1, 2, 3]);
  t.deepEqual(slasher([1, 2, 3], 9), []);
  t.deepEqual(slasher(['burgers', 'fries', 'shake'], 2), ['shake']);
});
