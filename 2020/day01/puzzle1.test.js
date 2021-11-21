import {
  multiplyThreeValues,
  multiplyTwoValues,
  searchThreeNumbersThatSum2020,
  searchTwoNumbersThatSum2020,
} from './puzzle1';
import { testInput } from './inputs';

const testValueAsArray = testInput.split('\n');

describe('Part One', () => {
  describe('searchTwoNumbersThatSum2020()', () => {
    it('should return an object containing two numbers if the sum result is 2020', () => {
      const numbers = searchTwoNumbersThatSum2020(testValueAsArray);
      expect(numbers).toEqual(
        expect.objectContaining({ firstNumber: 1721, secondNumber: 299 })
      );
    });

    it('should return "null" if no numbers were found', () => {
      const numbers = searchTwoNumbersThatSum2020([100, 200]);
      expect(numbers).toBeNull();
    });
  });

  describe('multiplyTwoValues()', () => {
    it('should return the multiplication result between two numbers', () => {
      const result = multiplyTwoValues(2, 3);
      expect(result).toEqual(6);
    });
  });
});

describe('Part Two', () => {
  describe('searchThreeNumbersThatSum2020()', () => {
    it('should return an object containing three numbers if the sum result is 2020', () => {
      const numbers = searchThreeNumbersThatSum2020(testValueAsArray);
      expect(numbers).toEqual(
        expect.objectContaining({
          firstNumber: 979,
          secondNumber: 366,
          thirdNumber: 675,
        })
      );
    });
  });

  describe('multiplyThreeValues()', () => {
    it('should return the multiplication result between three numbers', () => {
      const result = multiplyThreeValues(2, 3, 4);
      expect(result).toEqual(24);
    });
  });
});
