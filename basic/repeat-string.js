// Repeat a given string (first argument) num times (second
// argument). Return an empty string if num is not a
// positive number.

export default function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}
