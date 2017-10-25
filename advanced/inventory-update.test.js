import test from 'ava';
import update from './inventory-update';

test('should return an array', (t) => {
  const currInv = [];
  const newInv = [];

  t.true(Array.isArray(update(currInv, newInv)));
});

test('should update the current existing inventory item quantities', (t) => {
  const currInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone'],
    [2, 'Toothpaste'],
  ];
  const newInv = [
    [2, 'Hair Pin'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste'],
  ];
  const expected = [
    [88, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [3, 'Hair Pin'],
    [5, 'Microphone'],
    [9, 'Toothpaste'],
  ];

  t.deepEqual(update(currInv, newInv), expected);
});

test('should add the new item into the inventory if an item cannot be found', (t) => {
  const currInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone'],
  ];
  const newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste'],
  ];
  const expected = [
    [88, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [3, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [5, 'Microphone'],
    [7, 'Toothpaste'],
  ];

  t.deepEqual(update(currInv, newInv), expected);
});

test('returned inventory array should be in alphabetical order by item', (t) => {
  const currInv = [
    [5, 'Microphone'],
    [10, 'Bowling Ball'],
    [100, 'Hair Pin'],
    [20, 'Dirty Sock'],
  ];
  const newInv = [
    [20, 'Hair Pin'],
    [5, 'Bowling Ball'],
    [10, 'Toothpaste'],
  ];
  const expected = [
    [15, 'Bowling Ball'],
    [20, 'Dirty Sock'],
    [120, 'Hair Pin'],
    [5, 'Microphone'],
    [10, 'Toothpaste'],
  ];

  t.deepEqual(update(currInv, newInv), expected);
});
