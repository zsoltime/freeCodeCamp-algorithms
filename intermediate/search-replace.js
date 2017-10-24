function isCapitalized(str) {
  return str[0] === str[0].toUpperCase();
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export default function replace(str, before, after) {
  return str.replace(new RegExp(before), match => (
    isCapitalized(match) ? capitalize(after) : after
  ));
}
