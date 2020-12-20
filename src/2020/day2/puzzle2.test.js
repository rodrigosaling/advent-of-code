import {
  checkIfCharIsAtPositions,
  countNumberOfValidPasswords,
} from './puzzle2';
import { testValue } from './input-test';
import { realValue } from './input';

jest.mock('../../utils/log', () => ({
  initLog: () => jest.fn(),
  // initLog: () => (text) => console.log(text),
}));

const testValueAsArray = testValue.split('\n');
const realValueAsArray = realValue.split('\n');

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

    expect(
      checkIfCharIsAtPositions({
        char: 'a',
        password: 'ab',
        range: { min: 1, max: 3 },
      })
    ).toBeTruthy();

    expect(
      checkIfCharIsAtPositions({
        char: 'a',
        password: 'ab',
        range: { min: 4, max: 3 },
      })
    ).toBeFalsy();

    expect(
      checkIfCharIsAtPositions({
        char: 'a',
        password: 'baaaa',
        range: { min: 1, max: 3 },
      })
    ).toBeTruthy();
  });

  it('should return the correct number of valid passwords from a list', () => {
    expect(countNumberOfValidPasswords(testValueAsArray)).toEqual(1);
  });

  it('should not be 250 as the number of valid passwords from a list', () => {
    expect(countNumberOfValidPasswords(realValueAsArray)).not.toEqual(250);
  });
});
