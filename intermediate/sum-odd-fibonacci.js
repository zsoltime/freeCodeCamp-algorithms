// Given a positive integer num, return the sum of all odd
// Fibonacci numbers that are less than or equal to num. The
// first two numbers in the Fibonacci sequence are 1 and 1.
// Every additional number in the sequence is the sum of the
// two previous numbers.The first six numbers of the
// Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd
// Fibonacci numbers less than 10 are 1, 1, 3, and 5.

function fibonacci(max) {
  const fibos = [1, 1];

  for (let i = 1; fibos[i] + fibos[i - 1] <= max; i += 1) {
    fibos.push(fibos[i] + fibos[i - 1]);
  }
  return fibos;
}

export default function sumFibs(max) {
  return fibonacci(max).reduce(
    (sum, val) => (val % 2 === 1 ? sum + val : sum),
    0,
  );
}
