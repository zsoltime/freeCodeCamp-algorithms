import test from 'ava';
import convert from './convert-html-entities';

test('should return a string', (t) => {
  t.is(typeof convert('html <'), 'string');
});

test('should convert the characters &, <, >, " and \' in a string to HTML entities', (t) => {
  t.is(convert('Dolce & Gabbana'), 'Dolce &amp; Gabbana');
  t.is(
    convert('Hamburgers < Pizza < Tacos'),
    'Hamburgers &lt; Pizza &lt; Tacos',
  );
  t.is(convert('Sixty > twelve'), 'Sixty &gt; twelve');
  t.is(
    convert('Stuff in "quotation marks"'),
    'Stuff in &quot;quotation marks&quot;',
  );
  t.is(convert("Shindler's List"), 'Shindler&apos;s List');
  t.is(convert('abc'), 'abc');
});
