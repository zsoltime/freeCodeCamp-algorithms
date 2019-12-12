import test from 'ava';
import convert from './binary-agents';

test('should return a string', (t) => {
  t.is(typeof convert(''), 'string');
});

test('should convert a space separated binary string', (t) => {
  const actual = convert(
    '01001001 00100000 01101100 01101111 01110110 01100101 00100000 01100110 01110101 01101110',
  );
  const expected = 'I love fun';

  t.is(actual, expected);
});
