import test from 'ava';
import convert from './spinal-tap-case';

test('should return a string', (t) => {
  t.is(typeof convert('test string'), 'string');
});

test('should convert string to spinal case, lowercase-words-joined-by-dashes', (t) => {
  t.is(convert('This Is Spinal Tap'), 'this-is-spinal-tap');
  t.is(convert('thisIsSpinalTap'), 'this-is-spinal-tap');
  t.is(convert('The_Andy_Griffith_Show'), 'the-andy-griffith-show');
  t.is(convert('Teletubbies say Eh-oh'), 'teletubbies-say-eh-oh');
});
