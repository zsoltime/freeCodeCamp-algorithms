export default function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, matches => (
      `${matches[0]} ${matches[1]}`
    ))
    .replace(/(\s|_)/g, '-')
    .toLowerCase();
}
