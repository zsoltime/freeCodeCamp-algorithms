import test from 'ava';
import confirmEnding from './confirm-ending';

test('should return a boolean', (t) => {
  t.is(typeof confirmEnding('test', 'st'), 'boolean');
});

test('should return true if string ends with characters of target string', (t) => {
  t.true(confirmEnding('He has to give me a new name', 'name'));
});

test('should return false if string does not end with characters of target string', (t) => {
  t.false(confirmEnding('Open sesame', 'fame'));
});

test.todo('should not use the built-in method .endsWith()');
