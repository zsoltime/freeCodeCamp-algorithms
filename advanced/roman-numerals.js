// Convert the given number into a roman numeral. All roman
// numerals answers should be provided in upper-case.

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

  for (
    let i = 0, keys = Object.keys(lookup), l = keys.length;
    i <= l;
    i += 1
  ) {
    while (num >= lookup[keys[i]]) {
      num -= lookup[keys[i]];
      roman.push(keys[i]);
    }
  }

  return roman.join('');
}
