import { realInput } from './inputs';

const realInputAsArray = realInput.split('\n');

export const searchTwoNumbersThatSum2020 = (input) => {
  const numberOfLines = input.length;

  for (let i = 0; i < numberOfLines - 1; i += 1) {
    const firstNumber = parseInt(input[i], 10);
    for (let j = i + 1; j < numberOfLines; j += 1) {
      const secondNumber = parseInt(input[j], 10);
      if (firstNumber + secondNumber === 2020) {
        return { firstNumber, secondNumber };
      }
    }
  }
  return null;
};

export const multiplyTwoValues = (val1, val2) => val1 * val2;

const partOne = () => {
  const realInputAsArray = realInput.split('\n');
  const { firstNumber, secondNumber } =
    searchTwoNumbersThatSum2020(realInputAsArray);
  const result = multiplyTwoValues(firstNumber, secondNumber);
  console.log('Part one result:', result);
};

partOne();

export const searchThreeNumbersThatSum2020 = (input) => {
  const numberOfLines = input.length;

  for (let i = 0; i < numberOfLines - 1; i += 1) {
    const firstNumber = parseInt(input[i], 10);
    for (let j = i + 1; j < numberOfLines; j += 1) {
      const secondNumber = parseInt(input[j], 10);
      for (let k = j + 1; k < numberOfLines; k += 1) {
        const thirdNumber = parseInt(input[k], 10);
        if (firstNumber + secondNumber + thirdNumber === 2020) {
          return { firstNumber, secondNumber, thirdNumber };
        }
      }
    }
  }
  return null;
};

export const multiplyThreeValues = (val1, val2, val3) => val1 * val2 * val3;

const partTwo = () => {
  const { firstNumber, secondNumber, thirdNumber } =
    searchThreeNumbersThatSum2020(realInputAsArray);
  const result = multiplyThreeValues(firstNumber, secondNumber, thirdNumber);
  console.log('Part two result:', result);
};

partTwo();
