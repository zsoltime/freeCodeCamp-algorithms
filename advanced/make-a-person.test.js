import test from 'ava';
import Person from './make-a-person';

const bob = new Person('Bob Ross');

test('bob should be an instance of Person', (t) => {
  t.true(bob instanceof Person);
});

test('bob sohuld have 6 methods', (t) => {
  t.is(Object.keys(bob).length, 6);
});

test('bob.firstName should return undefined', (t) => {
  t.is(bob.firstName, undefined);
});

test('bob.lastName should return undefined', (t) => {
  t.is(bob.lastName, undefined);
});

test('bob.getFirstName() should return "Bob"', (t) => {
  const actual = bob.getFirstName();
  const expected = 'Bob';

  t.is(actual, expected);
});

test('bob.getLastName() should return "Ross"', (t) => {
  const actual = bob.getLastName();
  const expected = 'Ross';

  t.is(actual, expected);
});

test('bob.getFullName() should return "Bob Ross"', (t) => {
  const actual = bob.getFullName();
  const expected = 'Bob Ross';

  t.is(actual, expected);
});

test('bob.getFullName() should return "Haskell Ross" after setting first name to Haskell', (t) => {
  bob.setFirstName('Haskell');

  const actual = bob.getFullName();
  const expected = 'Haskell Ross';

  t.is(actual, expected);
});

test('bob.getFullName() should return "Haskell Curry" after setting last name to Curry', (t) => {
  bob.setLastName('Curry');

  const actual = bob.getFullName();
  const expected = 'Haskell Curry';

  t.is(actual, expected);
});

test('bob.getFullName() should return "Bela Kovacs" after setting full name to Bela Kovacs', (t) => {
  bob.setFullName('Bela Kovacs');

  const actual = bob.getFullName();
  const expected = 'Bela Kovacs';

  t.is(actual, expected);
});
