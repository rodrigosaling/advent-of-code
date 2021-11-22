export const makeArrayOfPassports = (input) => input.split('\n\n');

export const getPassportFields = (passport) => [
  ...passport.matchAll(/[a-z]{3}:[#a-zA-Z0-9]+/gm),
];

export const isPassportValid = (passport, requiredFields) => {
  const fields = getPassportFields(passport);
  const requiredFieldsCheck = requiredFields.map((field) => ({
    name: field,
    found: false,
  }));

  // eslint-disable-next-line no-restricted-syntax
  for (const field of fields) {
    const match = field[0];
    const [key] = match.split(':');

    const fieldMatchIndex = requiredFieldsCheck.findIndex(
      (requiredField) => requiredField.name === key
    );
    if (fieldMatchIndex > -1) {
      requiredFieldsCheck[fieldMatchIndex].found = true;
    }
  }
  return requiredFieldsCheck.every((field) => field.found);
};

export const countValidPassports = (passports, requiredFields) => {
  let count = 0;
  for (let index = 0; index < passports.length; index++) {
    const passport = passports[index];
    if (isPassportValid(passport, requiredFields)) count++;
  }
  return count;
};
