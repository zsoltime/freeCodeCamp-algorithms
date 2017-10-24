import test from 'ava';
import repeat from './repeat-string';

test('should return a string', (t) => {
  t.is(typeof repeat('test', 4), 'string');
});

test('should return the given string the number of times given in second arg', (t) => {
  t.is(repeat('abx', 3), 'abxabxabx');
  t.is(repeat('!', 5), '!!!!!');
});

test('should return the given string if the second arg is 1', (t) => {
  t.is(repeat('abx', 1), 'abx');
});

test('should return an empty string if second arg is not a positive number', (t) => {
  t.is(repeat('Boing', 0), '');
  t.is(repeat('Boing', -1), '');
});
