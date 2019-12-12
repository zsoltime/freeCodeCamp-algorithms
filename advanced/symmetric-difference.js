// Create a function that takes two or more arrays and
// returns an array of the symmetric difference (△ or ⊕) of
// the provided arrays.
// Given two sets, the mathematical term "symmetric
// difference" of two sets is the set of elements which are
// in either of the two sets, but not in both. For every
// additional symmetric difference you take, you should get
// the set with elements which are in either of the two the
// sets but not both.

function diff(a, b) {
  const arr = [];
  for (let i = 0; i < a.length; i += 1) {
    if (!b.includes(a[i]) && !arr.includes(a[i])) {
      arr.push(a[i]);
    }
  }

  for (let i = 0; i < b.length; i += 1) {
    if (!a.includes(b[i]) && !arr.includes(b[i])) {
      arr.push(b[i]);
    }
  }
  return arr;
}

export default function symmetricDifference(...args) {
  return args.reduce(diff);
}
