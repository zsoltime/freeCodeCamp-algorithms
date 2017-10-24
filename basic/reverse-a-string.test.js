import test from 'ava';
import reverse from './reverse-a-string';

test('should return a string', (t) => {
  t.is(typeof reverse('test'), 'string');
});

test('should reverse a string', (t) => {
  t.is(reverse('test string'), 'gnirts tset');
});

test('should keep capitalization of letters', (t) => {
  t.is(reverse('Test STRiNG'), 'GNiRTS tseT');
});
