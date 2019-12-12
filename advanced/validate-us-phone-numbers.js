// Return true if the passed string is a valid US phone
// number. The user may fill out the form field any way they
// choose as long as it is a valid US number. For this
// challenge you will be presented with a string. Your job
// is to validate or reject the US phone number based on any
// combination of the formats provided above. The area code
// is required. If the country code is provided, you must
// confirm that the country code is 1. Return true if the
// string is a valid US phone number; otherwise return
// false.

export default function telephoneCheck(str) {
  return new RegExp(
    [
      /^(1\s?)?/, // leading 1 w/ or w/o space
      /(\d{3}|\(\d{3}\))/, // first three digits
      /[- ]?/,
      /\d{3}/, // second three digits
      /[- ]?/,
      /\d{4}$/, // last four digits
    ]
      .map((x) => x.source)
      .join(''),
  ).test(str);
}
