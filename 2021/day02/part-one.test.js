import { returnMultipliedPosition } from './functions';
import { realInput, testInput } from './inputs';

describe('2021 Day 2 part one', () => {
  describe('using testInput', () => {
    it('should return 150 as multiplication result', () => {
      expect(returnMultipliedPosition(testInput)).toBe(150);
    });
  });

  describe('using realInput', () => {
    it('should return more than 0 as multiplication result', () => {
      expect(returnMultipliedPosition(realInput)).toBeGreaterThan(0);
    });

    it('SOLUTION: should return 1636725 as multiplication result', () => {
      expect(returnMultipliedPosition(realInput)).toBe(1636725);
    });
  });
});
