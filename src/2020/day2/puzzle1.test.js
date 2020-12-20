import {
  checkIfNumberIsWithinRage,
  countNumberOfTimesCharInString,
  transformStringIntoObject,
} from './puzzle1';
import { testValue } from './input-test';

jest.mock('../../utils/log', () => ({
  initLog: () => jest.fn(),
  // initLog: () => (text) => console.log(text),
}));

const testValueAsArray = testValue.split('\n');

describe('Puzzle 1 from Day 2', () => {
  it('should receive a string and return a structured object', () => {
    expect(transformStringIntoObject(testValueAsArray[0])).toEqual(
      expect.objectContaining({
        range: { min: 1, max: 3 },
        char: 'a',
        password: 'abcde',
      })
    );

    expect(transformStringIntoObject(testValueAsArray[1])).toEqual(
      expect.objectContaining({
        range: { min: 1, max: 3 },
        char: 'b',
        password: 'cdefg',
      })
    );

    expect(transformStringIntoObject(testValueAsArray[2])).toEqual(
      expect.objectContaining({
        range: { min: 2, max: 9 },
        char: 'c',
        password: 'ccccccccc',
      })
    );
  });

  it('should return the number of times a char appears in a string', () => {
    expect(countNumberOfTimesCharInString('a', 'bbbabbb')).toEqual(1);
    expect(countNumberOfTimesCharInString('a', 'aaa')).toEqual(3);
    expect(countNumberOfTimesCharInString('a', 'ccccc')).toEqual(0);
  });

  it('should test if a number is between other two numbers', () => {
    expect(checkIfNumberIsWithinRage(3, { min: 1, max: 4 })).toBeTruthy();
    expect(checkIfNumberIsWithinRage(3, { min: 3, max: 3 })).toBeTruthy();
    expect(checkIfNumberIsWithinRage(3, { min: 4, max: 6 })).toBeFalsy();
    expect(checkIfNumberIsWithinRage(3, { min: 1, max: 2 })).toBeFalsy();
  });
});
