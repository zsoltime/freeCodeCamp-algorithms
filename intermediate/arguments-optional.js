// Create a function that sums two arguments together. If
// only one argument is provided, then return a function
// that expects one argument and returns the sum. Calling
// this returned function with a single argument will then
// return the sum. If either argument isn't a valid number,
// return undefined.

export default function addTogether(...args) {
  if (args.length === 1 && Number.isInteger(args[0])) {
    return function add(x) {
      return Number.isInteger(x) ? args[0] + x : undefined;
    };
  }
  if (Number.isInteger(args[0]) && Number.isInteger(args[1])) {
    return args[0] + args[1];
  }
  return undefined;
}
