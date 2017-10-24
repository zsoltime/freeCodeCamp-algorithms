export default function factorialize(num) {
  if (num === 0) { return 1; }
  if (num <= 2) { return num; }
  return num * factorialize(num - 1);
}
