export default function truncateString(str, num) {
  if (num <= 3) {
    return `${str.substr(0, num)}...`;
  } else if (str.length > num) {
    return `${str.substr(0, num - 3)}...`;
  }
  return str;
}
