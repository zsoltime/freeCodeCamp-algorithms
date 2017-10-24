export default function destroyer(arr, ...args) {
  return arr.filter(val => !args.includes(val));
}
