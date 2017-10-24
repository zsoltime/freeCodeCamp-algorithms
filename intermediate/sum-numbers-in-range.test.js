import test from 'ava';
import sum from './sum-numbers-in-range';

test('should return a number', (t) => {
  t.is(typeof sum([1, 3]), 'number');
});

test('should return the sum of the give two numbers and all numbers between them', (t) => {
  t.is(sum([1, 4]), 10);
  t.is(sum([5, 10]), 45);
});

test('should return the same number regardless of the order of numbers', (t) => {
  t.is(sum([4, 1]), 10);
  t.is(sum([5, 10]), sum([10, 5]));
});
