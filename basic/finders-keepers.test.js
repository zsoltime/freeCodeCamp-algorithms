import test from 'ava';
import find from './finders-keepers';

test('should return the first element in the array that passes the function in 2nd arg', (t) => {
  const func = (num) => num % 2 === 0;

  t.is(find([1, 2, 3, 4, 5, 6], func), 2);
  t.is(find([1, 3, 5, 8, 9, 10], func), 8);
});

test('should return undefined if no element passes the function', (t) => {
  const func = (num) => num % 3 === 0;

  t.is(typeof find([1, 2, 4, 5, 7], func), 'undefined');
});
