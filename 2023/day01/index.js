import { test, real } from './inputs.js';

const lines = real.split('\n');

let sum = 0;
for (const line of lines) {
  if (line.length) {
    const numbers = line.replace(new RegExp('[a-zA-Z]+', 'g'), '');
    if (numbers.length === 1) {
      sum += parseFloat(numbers[0] + numbers[0], 10);
    } else {

      sum += parseFloat(numbers[0] + numbers.slice(-1), 10)
    }
  }
}

console.log(sum)
