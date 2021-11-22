export const makeArrayOfPassports = (input) => input.split('\n\n');

export const getPassportFields = (passport) => [
  ...passport.matchAll(/[a-z]{3}:[#a-zA-Z0-9]+/gm),
];

export const convertHgtToNumber = (value) => parseInt(value, 10);

export const isFieldValid = (key, value) => {
  switch (key) {
    case 'byr':
      return parseInt(value, 10) >= 1920 && parseInt(value, 10) <= 2002;

    case 'iyr':
      return parseInt(value, 10) >= 2010 && parseInt(value, 10) <= 2020;

    case 'eyr':
      return parseInt(value, 10) >= 2020 && parseInt(value, 10) <= 2030;

    case 'hgt': {
      const suffix = value.slice(-2);
      const number = convertHgtToNumber(value);
      if (suffix !== 'cm' && suffix !== 'in') return false;
      if (suffix === 'cm') return number >= 150 && number <= 193;
      if (suffix === 'in') return number >= 59 && number <= 76;
      return false;
    }

    case 'hcl':
      return /^#[a-f0-9]*$/.test(value);

    case 'ecl':
      return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value);

    case 'pid':
      return /^[0-9]{9}$/.test(value);

    default:
      return false;
  }
};

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

export const isPassportAndFieldValid = (passport, requiredFields) => {
  const fields = getPassportFields(passport);
  const requiredFieldsCheck = requiredFields.map((field) => ({
    name: field,
    found: false,
    valid: false,
  }));

  // eslint-disable-next-line no-restricted-syntax
  for (const field of fields) {
    const match = field[0];
    const [key, value] = match.split(':');

    const fieldMatchIndex = requiredFieldsCheck.findIndex(
      (requiredField) => requiredField.name === key
    );
    if (fieldMatchIndex > -1) {
      requiredFieldsCheck[fieldMatchIndex].found = true;
    }

    if (isFieldValid(key, value)) {
      requiredFieldsCheck[fieldMatchIndex].valid = true;
    }
  }
  return requiredFieldsCheck.every((field) => field.found && field.valid);
};

export const countValidPassports = (passports, requiredFields) => {
  let count = 0;
  for (let index = 0; index < passports.length; index++) {
    const passport = passports[index];
    if (isPassportValid(passport, requiredFields)) count++;
  }
  return count;
};

export const countValidPassportsAndFields = (passports, requiredFields) => {
  let count = 0;
  for (let index = 0; index < passports.length; index++) {
    const passport = passports[index];
    if (isPassportAndFieldValid(passport, requiredFields)) count++;
  }
  return count;
};
