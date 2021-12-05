import { returnPowerConsumption } from './functions';
import { realInput, testInput } from './inputs';

describe('2021 Day 2 part one', () => {
  describe('using testInput', () => {
    it('should return 150 as multiplication result', () => {
      expect(returnPowerConsumption(testInput)).toBe(198);
    });
  });

  describe('using realInput', () => {
    it('SOLUTION: should return 3847100 as multiplication result', () => {
      expect(returnPowerConsumption(realInput)).toBe(3847100);
    });
  });
});
