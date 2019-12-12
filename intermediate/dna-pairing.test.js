import test from 'ava';
import pair from './dna-pairing';

test('should return an array', (t) => {
  t.true(Array.isArray(pair('GCG')));
});

test('should take each character, get its pair, and return the results', (t) => {
  t.deepEqual(pair('GCG'), [
    ['G', 'C'],
    ['C', 'G'],
    ['G', 'C'],
  ]);
  t.deepEqual(pair('TCAG'), [
    ['T', 'A'],
    ['C', 'G'],
    ['A', 'T'],
    ['G', 'C'],
  ]);
});

test('should return provided character as the first element in each array', (t) => {
  t.deepEqual(pair('AT'), [
    ['A', 'T'],
    ['T', 'A'],
  ]);
  t.deepEqual(pair('CAT'), [
    ['C', 'G'],
    ['A', 'T'],
    ['T', 'A'],
  ]);
});
