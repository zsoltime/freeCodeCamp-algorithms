export default function mutation(arr) {
  const arrLowercase = arr.map(str => str.toLowerCase());

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arrLowercase[1].length; i++) {
    if (!arrLowercase[0].includes(arrLowercase[1][i])) {
      return false;
    }
  }
  return true;
}
