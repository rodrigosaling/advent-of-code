import { realInput } from './inputs';

export const transformStringIntoObject = (string) => {
  const [validation, password] = string.split(': ');
  const [range, char] = validation.split(' ');
  const [min, max] = range.split('-');

  return {
    password,
    char,
    range: { min: parseInt(min, 10), max: parseInt(max, 10) },
  };
};

export const countNumberOfTimesCharInString = (char, string) => {
  let times = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (char === string[i]) {
      times += 1;
    }
  }
  return times;
};

export const checkIfNumberIsWithinRage = (number, range) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  range.min <= number && number <= range.max;

export const countNumberOfValidPasswords = (input) => {
  let numberValidPasswords = 0;
  // console.log('Iterating list');
  for (let i = 0; i < input.length; i += 1) {
    const line = input[i];
    const info = transformStringIntoObject(line);
    const numberAppearances = countNumberOfTimesCharInString(
      info.char,
      info.password
    );
    if (checkIfNumberIsWithinRage(numberAppearances, info.range)) {
      // console.log(`Valid password: ${line} ✅`);
      numberValidPasswords += 1;
    } else {
      // console.log(`Not Valid password: ${line} 🚫`);
    }
  }
  return numberValidPasswords;
};

const result = countNumberOfValidPasswords(realInput.split('\n'));
console.log(`Part one result: ${result}`);
