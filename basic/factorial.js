// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a
// factorial is the product of all positive integers less
// than or equal to n. Factorials are often represented with
// the shorthand notation n! Only integers greater than or
// equal to zero will be supplied to the function.

export default function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  if (num <= 2) {
    return num;
  }
  return num * factorialize(num - 1);
}
