import test from 'ava';
import sum from './sum-primes';

test('should return a number', (t) => {
  t.is(typeof sum(5), 'number');
});

test('should sum all the prime numbers up to and including the provided number', (t) => {
  t.is(sum(10), 17);
  t.is(sum(977), 73156);
});
