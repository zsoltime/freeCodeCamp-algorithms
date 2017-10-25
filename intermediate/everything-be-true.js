export default function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i += 1) {
    if (!collection[i][pre]) { return false; }
  }
  return true;
}
