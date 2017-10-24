import test from 'ava';
import sum from './sum-odd-fibonacci';

test('should return a number', (t) => {
  t.is(typeof sum(1), 'number');
});

test('should return the sum of all odd Fibonacci numbers less than or equal to arg', (t) => {
  t.is(sum(4), 5);
  t.is(sum(1000), 1785);
  t.is(sum(4000000), 4613732);
});
