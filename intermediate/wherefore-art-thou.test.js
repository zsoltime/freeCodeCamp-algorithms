import test from 'ava';
import matching from './wherefore-art-thou';

test('should return an array', (t) => {
  t.true(Array.isArray(matching([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }], { a: 1 })));
});

test('should return an array of all objects that have matching property and value pairs', (t) => {
  const actual = matching([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }], { a: 1 });
  const expected = [{ a: 1 }, { a: 1 }, { a: 1, b: 2 }];

  t.deepEqual(actual, expected);
});
