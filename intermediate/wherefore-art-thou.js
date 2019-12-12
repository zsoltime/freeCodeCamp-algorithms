// Make a function that looks through an array of objects
// (first argument) and returns an array of all objects that
// have matching property and value pairs (second argument).
// Each property and value pair of the source object has to
// be present in the object from the collection if it is to
// be included in the returned array.

export default function whatIsInAName(collection, source) {
  return collection.filter((obj) =>
    Object.keys(source).every(
      (key) =>
        Object.prototype.hasOwnProperty.call(obj, key) &&
        obj[key] === source[key],
    ),
  );
}
