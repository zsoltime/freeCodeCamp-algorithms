import test from 'ava';
import longest from './longest-word';

test('should return a number', (t) => {
  t.is(typeof longest('test'), 'number');
});

test('should return the length of the longest word', (t) => {
  t.is(longest('The quick brown fox jumped over the lazy dog'), 6);
  t.is(longest('May the force be with you'), 5);
  t.is(longest('What if we try a super-long word such as otorhinolaryngology'), 19);
});
