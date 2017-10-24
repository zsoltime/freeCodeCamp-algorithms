export default function pairElement(str) {
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  return str
    .split('')
    .reduce((arr, letter) => {
      if (letter in pairs) {
        return [...arr, [letter, pairs[letter]]];
      }
      return arr;
    }, []);
}
