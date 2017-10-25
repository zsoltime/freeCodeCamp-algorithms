import test from 'ava';
import isTruthy from './everything-be-true';

test('should return a boolean', (t) => {
  t.is(typeof isTruthy([]), 'boolean');
});

test('should return true if second arg is truthy on all elements of collection', (t) => {
  t.true(isTruthy([{ single: 'yes' }, { single: true }], 'single'));
  t.true(isTruthy([
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' },
  ], 'sex'));
});

test('should return false if second arg is falsy on at least one element', (t) => {
  t.false(isTruthy([{ single: '' }, { single: 'double' }], 'single'));
  t.false(isTruthy([{ single: 'double' }, { single: undefined }], 'single'));
});
