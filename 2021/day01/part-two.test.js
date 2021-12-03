import {
  countTimesNextSlidingWindowIsLarger,
  fromInputToArray,
} from './functions';
import { realInput, testInput } from './inputs';

describe('2021 Day 1 part two', () => {
  describe('using testInput', () => {
    const testInputArray = fromInputToArray(testInput);

    it('should return 5 measurements', () => {
      expect(countTimesNextSlidingWindowIsLarger(testInputArray)).toBe(5);
    });
  });

  describe('using realInput', () => {
    const realInputArray = fromInputToArray(realInput);

    it('should return more than 0 measurements', () => {
      expect(
        countTimesNextSlidingWindowIsLarger(realInputArray)
      ).toBeGreaterThan(0);
    });

    it('SOLUTION: should return 1567 measurements', () => {
      expect(countTimesNextSlidingWindowIsLarger(realInputArray)).toBe(1567);
    });
  });
});
