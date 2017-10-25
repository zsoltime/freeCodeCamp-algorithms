import test from 'ava';
import permAlone from './no-repeats-please';

test('should return a number', (t) => {
  t.is(typeof permAlone('aab'), 'number');
});

test('should return the number of permutations of the string that do not have repeated consecutive letters', (t) => {
  t.is(permAlone('a'), 1);
  t.is(permAlone('aaa'), 0);
  t.is(permAlone('aab'), 2);
  t.is(permAlone('aaab'), 0);
  t.is(permAlone('aabb'), 8);
  t.is(permAlone('abcdefa'), 3600);
  t.is(permAlone('xxxxx'), 0);
});
