import { countTimesNextNumberIsLarger, fromInputToArray } from './functions';
import { realInput, realInputV2, testInput } from './inputs';

describe('2021 Day 1 part one', () => {
  describe('using testInput', () => {
    const testInputArray = fromInputToArray(testInput);

    it('should return 7 measurements', () => {
      expect(countTimesNextNumberIsLarger(testInputArray)).toBe(7);
    });
  });

  describe('using realInput', () => {
    const realInputArray = fromInputToArray(realInput);

    it('should return more than 0 measurements', () => {
      expect(countTimesNextNumberIsLarger(realInputArray)).toBeGreaterThan(0);
    });

    it('should not return 1528 measurements (too low)', () => {
      expect(countTimesNextNumberIsLarger(realInputArray)).not.toBe(1528);
    });
  });

  describe('using realInput V2', () => {
    it('should return more than 0 measurements', () => {
      expect(countTimesNextNumberIsLarger(realInputV2)).toBeGreaterThan(0);
    });

    it('should not return 1528 measurements (too low)', () => {
      expect(countTimesNextNumberIsLarger(realInputV2)).not.toBe(1528);
    });

    it('SOLUTION: should return 1529 measurements (too low)', () => {
      expect(countTimesNextNumberIsLarger(realInputV2)).toBe(1529);
    });
  });

  describe('debugging the difference between realInput versions', () => {
    const realInputArray = fromInputToArray(realInput);

    it('should have the same length as realInput', () => {
      expect(realInputV2.length).toBe(realInputArray.length);
    });
  });
});
