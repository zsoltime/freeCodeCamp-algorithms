import test from 'ava';
import rot13 from './caesars-cipher';

test('should return a string', (t) => {
  t.is(typeof rot13('test'), 'string');
});

test('should shift the values of the letters by 13 places', (t) => {
  t.is(rot13('A'), 'N');
  t.is(rot13('CVMMN'), 'PIZZA');
});

test('should not shift non-alphabetic characters', (t) => {
  t.is(rot13('!!!'), '!!!');
  t.is(rot13('SERR YBIR?'), 'FREE LOVE?');
});
