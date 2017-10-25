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
