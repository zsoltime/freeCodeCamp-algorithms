// Perform a search and replace on the sentence using the
// arguments provided and return the new sentence. First
// argument is the sentence to perform the search and
// replace on. Second argument is the word that you will be
// replacing (before). Third argument is what you will be
// replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are
// replacing it.

const isCapitalized = (str) => str[0] === str[0].toUpperCase();

const capitalize = (str) =>
  str[0].toUpperCase() + str.slice(1).toLowerCase();

export default function replace(str, before, after) {
  const caseSensitiveReplace = (match) =>
    isCapitalized(match) ? capitalize(after) : after;

  return str.replace(new RegExp(before), caseSensitiveReplace);
}
