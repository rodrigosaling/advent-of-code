import { returnMultipliedAimPosition } from './functions';
import { realInput, testInput } from './inputs';

describe('2021 Day 2 part two', () => {
  describe('using testInput', () => {
    it('should return 900 as multiplication result', () => {
      expect(returnMultipliedAimPosition(testInput)).toBe(900);
    });
  });

  describe('using realInput', () => {
    it('should return more than 0 as multiplication result', () => {
      expect(returnMultipliedAimPosition(realInput)).toBeGreaterThan(0);
    });

    it('SOLUTION: should return 1872757425 as multiplication result', () => {
      expect(returnMultipliedAimPosition(realInput)).toBe(1872757425);
    });
  });
});
