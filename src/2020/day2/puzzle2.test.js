import {
  checkIfCharIsAtPositions,
  countNumberOfValidPasswords,
} from './puzzle2';
import { testValue } from './input-test';

jest.mock('../../utils/log', () => ({
  initLog: () => jest.fn(),
  // initLog: () => (text) => console.log(text),
}));

const testValueAsArray = testValue.split('\n');

describe('Puzzle 2 from Day 2', () => {
  it('should check if a char exists at one position and DOES NOT exist at another position', () => {
    expect(
      checkIfCharIsAtPositions({
        char: 'a',
        password: 'aaaaa',
        range: { min: 1, max: 2 },
      })
    ).toBeFalsy();

    expect(
      checkIfCharIsAtPositions({
        char: 'a',
        password: 'abaaa',
        range: { min: 1, max: 2 },
      })
    ).toBeTruthy();
  });

  it('should return the correct number of valid passwords from a list', () => {
    expect(countNumberOfValidPasswords(testValueAsArray)).toEqual(1);
  });
});
