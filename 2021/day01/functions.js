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
