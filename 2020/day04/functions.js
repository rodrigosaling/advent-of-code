export const makeArrayOfPassports = (input) => input.split('\n\n');

export const getPassportFields = (passport) => [
  ...passport.matchAll(/[a-z]{3}:[#a-zA-Z0-9]+/gm),
];
