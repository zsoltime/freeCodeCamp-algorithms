import test from 'ava';
import translate from './pig-latin';

test('should return a string', (t) => {
  t.is(typeof translate('something'), 'string');
});

test('should add way to the word if it begins with a vowel', (t) => {
  t.is(translate('algorithm'), 'algorithmway');
  t.is(translate('ate'), 'ateway');
});

test('should take the first consonant of a word, move it to the end and add ay', (t) => {
  t.is(translate('glove'), 'oveglay');
  t.is(translate('paragraph'), 'aragraphpay');
});
