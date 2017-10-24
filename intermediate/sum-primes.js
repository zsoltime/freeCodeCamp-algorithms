function isPrime(n) {
  if (n <= 1) return false;
  else if (n <= 3) return true;
  else if (n % 2 === 0 || n % 3 === 0) return false;

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
