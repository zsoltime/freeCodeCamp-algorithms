import test from 'ava';
import boo from './boo-who';

test('should return a boolean', (t) => {
  t.is(typeof boo(true), 'boolean');
});

test('should check if a value is classified as a boolean primitive', (t) => {
  t.true(boo(true));
  t.true(boo(false));
  t.false(boo('true'));
  t.false(boo([5, 7]));
  t.false(boo({ a: 7 }));
  t.false(boo(NaN));
});
