import test from 'ava';
import orbitalPeriod from './map-the-derbis';

test('should return an array', (t) => {
  t.true(
    Array.isArray(
      orbitalPeriod([
        {
          name: 'sputnik',
          avgAlt: 35873.5553,
        },
      ]),
    ),
  );
});

test('should transform the elements average altitude into their orbital periods', (t) => {
  const actual = orbitalPeriod([
    {
      name: 'sputnik',
      avgAlt: 35873.5553,
    },
  ]);
  const expected = [
    {
      name: 'sputnik',
      orbitalPeriod: 86400,
    },
  ];

  t.deepEqual(actual, expected);
});

test('values should be rounded to the nearest whole number', (t) => {
  const actual = orbitalPeriod([
    {
      name: 'iss',
      avgAlt: 413.6,
    },
    {
      name: 'hubble',
      avgAlt: 556.7,
    },
    {
      name: 'moon',
      avgAlt: 378632.553,
    },
  ]);
  const expected = [
    {
      name: 'iss',
      orbitalPeriod: 5557,
    },
    {
      name: 'hubble',
      orbitalPeriod: 5734,
    },
    {
      name: 'moon',
      orbitalPeriod: 2377399,
    },
  ];

  t.deepEqual(actual, expected);
});
