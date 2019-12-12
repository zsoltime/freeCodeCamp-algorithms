import test from 'ava';
import matching from './wherefore-art-thou';

test('should return an array', (t) => {
  t.true(
    Array.isArray(
      matching([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }], { a: 1 }),
    ),
  );
});

test('should return an array of all objects that have matching property and value pairs', (t) => {
  let actual = matching([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }], {
    a: 1,
  });
  let expected = [{ a: 1 }, { a: 1 }, { a: 1, b: 2 }];

  t.deepEqual(actual, expected);

  actual = matching(
    [
      { apple: 1, bat: 2 },
      { bat: 2 },
      { apple: 1, bat: 2, cookie: 2 },
    ],
    { apple: 1, bat: 2 },
  );
  expected = [
    { apple: 1, bat: 2 },
    { apple: 1, bat: 2, cookie: 2 },
  ];

  t.deepEqual(actual, expected);

  actual = matching([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 });
  expected = [];

  t.deepEqual(actual, expected);
});
