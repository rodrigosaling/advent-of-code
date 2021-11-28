import { getMySeatID } from './functions';
import { realInput } from './inputs';

describe('Day 5 part two', () => {
  describe('using realInput', () => {
    it('should return your seat ID', () => {
      expect(getMySeatID(realInput)).toBeGreaterThan(0);
    });

    it('NOT SOLUTION: should NOT return the 596 as your seat ID', () => {
      expect(getMySeatID(realInput)).not.toBe(596);
    });

    it('SOLUTION: should return the 597 as your seat ID', () => {
      expect(getMySeatID(realInput)).toBe(597);
    });
  });
});
