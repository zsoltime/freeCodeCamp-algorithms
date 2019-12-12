// Sum all the prime numbers up to and including the
// provided number. A prime number is defined as a number
// greater than one and having only two divisors, one and
// itself.For example, 2 is a prime number because it's only
// divisible by one and two. The provided number may not be
// a prime.

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function primes(max) {
  const arr = [];
  for (let i = 2; i <= max; i += 1) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}

export default function sumPrimes(max) {
  return primes(max).reduce((a, b) => a + b, 0);
}
