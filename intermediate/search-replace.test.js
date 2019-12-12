import test from 'ava';
import replace from './search-replace';

test('should return a string', (t) => {
  t.is(typeof replace('test', 'e', 'a'), 'string');
});

test('should replace the given word in the sentence', (t) => {
  t.is(
    replace('Let us go to the store', 'store', 'mall'),
    'Let us go to the mall',
  );
  t.is(
    replace('This has a spellngi error', 'spellngi', 'spelling'),
    'This has a spelling error',
  );
  t.is(
    replace('Let us get back to more coding', 'coding', 'algorithms'),
    'Let us get back to more algorithms',
  );
});

test('should preserve the case of the original word', (t) => {
  t.is(replace('His name is Tom', 'Tom', 'john'), 'His name is John');
  t.is(
    replace('Let us get back to more Coding', 'Coding', 'algorithms'),
    'Let us get back to more Algorithms',
  );
});
