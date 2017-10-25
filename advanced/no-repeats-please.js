function permutations(str) {
  const array = str.split('');
  const result = [];

  function permute(arr, m = '') {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i += 1) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m + next);
      }
    }
  }
  permute(array);
  return result;
}

export default function permAlone(str) {
  return permutations(str).filter(s => !/(\w)\1+/.test(s)).length;
}
