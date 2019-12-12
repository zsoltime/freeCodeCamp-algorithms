// Return an English translated sentence of the passed
// binary string. The binary string will be space separated.

export default function binaryAgent(str) {
  return str
    .split(' ')
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join('');
}
