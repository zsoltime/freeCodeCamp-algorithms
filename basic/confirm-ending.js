export default function confirmEnding(str, target) {
  return !!str.match(new RegExp(`${target}$`));
}
