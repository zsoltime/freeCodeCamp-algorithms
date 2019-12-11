// One of the simplest and most widely known ciphers is a
// Caesar cipher, also known as a shift cipher. In a shift
// cipher the meanings of the letters are shifted by some
// set amount. A common modern use is the ROT13 cipher,
// where the values of the letters are shifted by 13
// places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on. Write a
// function which takes a ROT13 encoded string as input and
// returns a decoded string. All letters will be
// uppercase. Do not transform any non-alphabetic
// character(i.e.spaces, punctuation), but do pass them on.

const FIRST_LETTER = 65;
const LAST_LETTER = 90;
const NUMBER_OF_LETTERS = 26;

export function ShiftCipher(amount) {
  return (str) =>
    str.split('').reduce((word, letter) => {
      const originalChar = letter.charCodeAt(0);
      const shiftedChar = originalChar + (amount % NUMBER_OF_LETTERS);

      if (originalChar < FIRST_LETTER || originalChar > LAST_LETTER) {
        return word + letter;
      }

      return shiftedChar > LAST_LETTER
        ? word +
            String.fromCharCode(
              FIRST_LETTER - 1 + (shiftedChar % LAST_LETTER),
            )
        : word + String.fromCharCode(shiftedChar);
    }, '');
}

export default function rot13(str) {
  return ShiftCipher(39)(str);
}
