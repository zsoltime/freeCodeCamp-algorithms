import test from 'ava';
import titleCase from './title-case';

test('should return a string', (t) => {
  t.is(typeof titleCase('test'), 'string');
});

test('should return a string w/ the first letter of each word capitalized', (t) => {
  const actual = titleCase("I'm a little tea pot");
  const expected = "I'm A Little Tea Pot";

  t.is(actual, expected);
});

test('should the rest of the word be in lower case', (t) => {
  const actual = titleCase('sHoRt AND sToUt');
  const expected = 'Short And Stout';

  t.is(actual, expected);
});
