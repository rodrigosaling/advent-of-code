/* eslint-disable import/prefer-default-export */
import fromInputToArray from '../../utils/from-input-to-array';

export const returnMultipliedPosition = (input) => {
  const inputArray = fromInputToArray(input);
  let horizontal = 0;
  let depth = 0;

  for (let index = 0; index < inputArray.length; index++) {
    const line = inputArray[index];
    const [instruction, value] = line.split(' ');
    switch (instruction) {
      case 'forward':
        horizontal += parseInt(value, 10);
        break;
      case 'down':
        depth += parseInt(value, 10);
        break;
      case 'up':
        depth -= parseInt(value, 10);
        break;
      default:
        break;
    }
  }

  return horizontal * depth;
};
