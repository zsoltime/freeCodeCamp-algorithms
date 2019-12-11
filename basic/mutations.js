// Return true if the string in the first element of the
// array contains all of the letters of the string in the
// second element of the array.

export default function mutation(arr) {
  const arrLowercase = arr.map((str) => str.toLowerCase());

  for (let i = 0; i < arrLowercase[1].length; i += 1) {
    if (!arrLowercase[0].includes(arrLowercase[1][i])) {
      return false;
    }
  }
  return true;
}
