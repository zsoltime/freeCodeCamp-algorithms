function fibonacci(max) {
  const fibos = [1, 1];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; fibos[i] + fibos[i - 1] <= max; i++) {
    fibos.push(fibos[i] + fibos[i - 1]);
  }
  return fibos;
}

export default function sumFibs(max) {
  return fibonacci(max).reduce((sum, val) => (
    val % 2 === 1 ? sum + val : sum
  ), 0);
}
