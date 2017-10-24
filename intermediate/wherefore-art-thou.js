export default function whatIsInAName(collection, source) {
  return collection.filter((x) => {
    for (let key in source) {
      if (!x.hasOwnProperty(key) || x[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}
