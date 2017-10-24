export default function convertToRoman(num) {
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  const roman = [];

  for (let prop in lookup) {
    while (num >= lookup[prop]) {
      num -= lookup[prop];
      roman.push(prop);
    }
  }
  return roman.join('');
}
