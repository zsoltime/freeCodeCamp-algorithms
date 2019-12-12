import test from 'ava';
import convert from './roman-numerals';

test('should return a string', (t) => {
  t.is(typeof convert(4324), 'string');
});

test('should Convert the given number into a roman numeral', (t) => {
  t.is(convert(2), 'II');
  t.is(convert(4), 'IV');
  t.is(convert(5), 'V');
  t.is(convert(7), 'VII');
  t.is(convert(9), 'IX');
  t.is(convert(10), 'X');
  t.is(convert(12), 'XII');
  t.is(convert(29), 'XXIX');
  t.is(convert(44), 'XLIV');
  t.is(convert(47), 'XLVII');
  t.is(convert(83), 'LXXXIII');
  t.is(convert(98), 'XCVIII');
  t.is(convert(169), 'CLXIX');
  t.is(convert(345), 'CCCXLV');
  t.is(convert(501), 'DI');
  t.is(convert(649), 'DCXLIX');
  t.is(convert(892), 'DCCCXCII');
  t.is(convert(1007), 'MVII');
  t.is(convert(2017), 'MMXVII');
  t.is(convert(4999), 'MMMMCMXCIX');
});
