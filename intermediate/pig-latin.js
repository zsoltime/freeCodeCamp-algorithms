// Pig Latin takes the first consonant (or consonant
// cluster) of an English word, moves it to the end of the
// word and suffixes an "ay". If a word begins with a vowel
// you just add "way" to the end. Input strings are
// guaranteed to be English words in all lowercase.

export default function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) {
    return `${str}way`;
  }

  const idx = str.search(/[aeiou]/i);
  return `${str.substr(idx)}${str.slice(0, idx)}ay`;
}
