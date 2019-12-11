import test from 'ava';
import convertToF from './celsius-to-fahrenheit';

test('should return a number', (t) => {
  t.is(typeof convertToF(0), 'number');
});

test('should return the correct value', (t) => {
  t.is(convertToF(-30), -22);
  t.is(convertToF(-10), 14);
  t.is(convertToF(0), 32);
  t.is(convertToF(20), 68);
  t.is(convertToF(30), 86);
});
