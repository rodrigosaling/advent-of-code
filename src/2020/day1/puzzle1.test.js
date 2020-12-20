import { searchTwoNumbersThatSum2020, multiplyTwoValues } from './puzzle1';
import { testValue } from './input-test';

jest.mock('../../utils/log', () => ({
  initLog: () => jest.fn(),
  // initLog: () => (text) => console.log(text),
}));

const testValueAsArray = testValue.split('\n');

describe('The searchTwoNumbersThatSum2020 function', () => {
  it('should return an object containing two numbers if the sum result is 2020', () => {
    const numbers = searchTwoNumbersThatSum2020(testValueAsArray);
    expect(numbers).toEqual(
      expect.objectContaining({ firstValue: 1721, secondValue: 299 })
    );
  });

  it('should return "null" if no numbers were found', () => {
    const numbers = searchTwoNumbersThatSum2020([100, 200]);
    expect(numbers).toBeNull();
  });
});

describe('The multiplyTwoValues function', () => {
  it('should return the multiplication result between two numbers', () => {
    const result = multiplyTwoValues(2, 3);
    expect(result).toEqual(6);
  });
});
