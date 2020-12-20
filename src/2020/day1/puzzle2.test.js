import { searchThreeNumbersThatSum2020, multiplyThreeValues } from './puzzle2';
import { testValue } from './input-test';

jest.mock('../../utils/log', () => ({
  initLog: () => jest.fn(),
  // initLog: () => (text) => console.log(text),
}));

const testValueAsArray = testValue.split('\n');

describe('The searchThreeNumbersThatSum2020 function', () => {
  it('should return an object containing two numbers if the sum result is 2020', () => {
    const numbers = searchThreeNumbersThatSum2020(testValueAsArray);
    expect(numbers).toEqual(
      expect.objectContaining({
        firstValue: 979,
        secondValue: 366,
        thirdValue: 675,
      })
    );
  });

  it('should return "null" if no numbers were found', () => {
    const numbers = searchThreeNumbersThatSum2020([100, 200, 300, 400]);
    expect(numbers).toBeNull();
  });
});

describe('The multiplyTwoValues function', () => {
  it('should return the multiplication result between two numbers', () => {
    const result = multiplyThreeValues(2, 3, 4);
    expect(result).toEqual(24);
  });
});
