import test from 'ava';
import add from './arguments-optional';

test('should return a function if only one arg is provided', (t) => {
  t.is(typeof add(4), 'function');
});

test('should return a number if 2 args are provided', (t) => {
  t.is(typeof add(4, 1), 'number');
});

test('should add two numbers correctly', (t) => {
  t.is(add(50, 100), 150);
  t.is(add(-50, 100), 50);
});

test('should add two numbers correctly with the returned function', (t) => {
  const addTwo = add(2);
  const addTen = add(10);

  t.is(addTwo(5), 7);
  t.is(addTen(90), 100);
});

test('should return undefined if one of the arguments is not a number', (t) => {
  t.is(typeof add(5, '7'), 'undefined');
  t.is(typeof add('test', 99), 'undefined');
});
