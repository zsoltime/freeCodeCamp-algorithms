export default function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) {
    return `${str}way`;
  }

  const idx = str.search(/[aeiou]/i);
  return `${str.substr(idx)}${str.slice(0, idx)}ay`;
}
