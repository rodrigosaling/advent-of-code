import { searchTwoNumbersThatSum2020, multiplyTwoValues } from './puzzle1';
import { testValue } from './input-test';

jest.mock('../../utils/log', () => ({
  initLog: () => jest.fn(),
  // initLog: () => (text) => console.log(text),
}));

const testValueAsArray = testValue.split('\n');

describe('The Puzzle 1 from Day 2', () => {
  it('should receive a string and return a structured object', () => {});

  it('should return the number of times a char appears in a string', () => {});

  it('should test if a number is between other two numbers', () => {});
});
