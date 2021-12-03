export const fromInputToArray = (input) => input.split('\n');

export const countTimesNextNumberIsLarger = (array) => {
  let counter = 0;
  for (let index = 1; index < array.length; index++) {
    const currentNumber = parseInt(array[index], 10);
    const previousNumber = parseInt(array[index - 1] ?? 0, 10);
    if (currentNumber > previousNumber) {
      counter++;
    }
  }
  return counter;
};

export const returnCurrentWindowSum = (array, index) =>
  parseInt(array[index], 10) +
  parseInt(array[index - 1], 10) +
  parseInt(array[index - 2], 10);

export const returnPreviousWindowSum = (array, index) =>
  parseInt(array[index - 1], 10) +
  parseInt(array[index - 2], 10) +
  parseInt(array[index - 3], 10);

export const countTimesNextSlidingWindowIsLarger = (array) => {
  let counter = 0;
  for (let index = 3; index < array.length; index++) {
    const currentWindow = returnCurrentWindowSum(array, index);
    const previousWindow = returnPreviousWindowSum(array, index);
    if (currentWindow > previousWindow) {
      counter++;
    }
  }
  return counter;
};
