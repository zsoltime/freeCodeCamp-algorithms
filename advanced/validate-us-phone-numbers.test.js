import test from 'ava';
import isValid from './validate-us-phone-numbers';

test('should return a boolean', (t) => {
  t.is(typeof isValid('555'), 'boolean');
});

test('should return true if string is a valid US phone number', (t) => {
  t.true(isValid('555-555-5555'));
  t.true(isValid('1 555-555-5555'));
  t.true(isValid('1 (555) 555-5555'));
  t.true(isValid('5555555555'));
  t.true(isValid('555-555-5555'));
  t.true(isValid('(555)555-5555'));
  t.true(isValid('1(555)555-5555'));
  t.true(isValid('1 555 555 5555'));
  t.true(isValid('1 456 789 4444'));
});

test('should return false otherwise', (t) => {
  t.false(isValid('555-5555'));
  t.false(isValid('5555555'));
  t.false(isValid('1 555)555-5555'));
  t.false(isValid('123**&!!asdf#'));
  t.false(isValid('(6505552368)'));
  t.false(isValid('2 (757) 622-7382'));
  t.false(isValid('0 (757) 622-7382'));
  t.false(isValid('-1 (757) 622-7382'));
  t.false(isValid('10 (757) 622-7382'));
  t.false(isValid('27576227382'));
  t.false(isValid('(275)76227382'));
  t.false(isValid('555)-555-5555'));
});
