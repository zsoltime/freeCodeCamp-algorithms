export default function telephoneCheck(str) {
  return new RegExp([
    /^(1\s?)?/, // leading 1 w/ or wo/ space
    /(\d{3}|\(\d{3}\))/, // first three digits
    /[- ]?/,
    /\d{3}/, // second three digits
    /[- ]?/,
    /\d{4}$/, // last four digits
  ].map(x => x.source).join('')).test(str);
}
