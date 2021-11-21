import { realInput } from './inputs';
import { transformStringIntoObject } from './puzzle1';

export const checkIfCharIsAtPositions = ({
  char,
  password,
  range: { min: position1, max: position2 },
}) =>
  (char === password[position1 - 1] && char !== password[position2 - 1]) ||
  (char !== password[position1 - 1] && char === password[position2 - 1]);

export const countNumberOfValidPasswords = (input) => {
  let numberValidPasswords = 0;
  // log('Iterating list');
  for (let i = 0; i < input.length; i += 1) {
    const line = input[i];
    const info = transformStringIntoObject(line);
    if (checkIfCharIsAtPositions(info)) {
      // log(`Valid password: ${line} ✅`);
      numberValidPasswords += 1;
    } else {
      // log(`Not Valid password: ${line} 🚫`);
    }
  }
  return numberValidPasswords;
};

const result = countNumberOfValidPasswords(realInput.split('\n'));
console.log(`Part two result: ${result}`);
