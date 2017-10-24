import test from 'ava';
import truncate from './truncate-string';

test('should return a string', (t) => {
  t.is(typeof truncate('test'), 'string');
});

test('should truncate string if it is longer than the number given', (t) => {
  const str = 'A-tisket a-tasket A green and yellow basket';

  t.is(truncate(str, 5).length, 5);
  t.is(truncate(str, 11).length, 11);
});

test('should not truncate if string is equal to or shorter than the number given', (t) => {
  const str = 'test string';

  t.is(truncate(str, 11), str);
  t.is(truncate(str, 15), str);
});

test('should add three dots to the end if string is truncated', (t) => {
  const str = 'test string';

  t.true(!!truncate(str, 7).match(/\.\.\.$/));
  t.is(truncate(str, 7).length, 7);
});

test('should not count dots in string length if second arg is less than or equal to 3', (t) => {
  const str = 'test string';

  t.is(truncate(str, 3).length, 6);
  t.is(truncate(str, 2).length, 5);
});
