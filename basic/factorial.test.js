import test from 'ava';
import factorial from './factorial';

test('should return a number', (t) => {
  t.is(typeof factorial(2), 'number');
});

test('should return the correct number', (t) => {
  t.is(factorial(5), 120);
  t.is(factorial(10), 3628800);
});

test('should return 1 if number is 0', (t) => {
  t.is(factorial(0), 1);
});
