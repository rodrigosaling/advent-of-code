import { getRow, getSeatID, getColumn, getHighestSeatID } from './functions';
import { realInput } from './inputs';

describe('Day 5 part one', () => {
  describe('using testInput', () => {
    it('should return 44 as the row for FBFBBFF', () => {
      expect(getRow('FBFBBFF')).toBe(44);
    });

    it('should return 5 as the column for RLR', () => {
      expect(getColumn('RLR')).toBe(5);
    });

    it('should return seat ID 357 from boarding pass FBFBBFFRLR', () => {
      expect(getSeatID('FBFBBFFRLR')).toBe(357);
    });

    it('should return seat ID 357 from boarding pass BFFFBBFRRR', () => {
      expect(getSeatID('BFFFBBFRRR')).toBe(567);
    });

    it('should return seat ID 357 from boarding pass FFFBBBFRRR', () => {
      expect(getSeatID('FFFBBBFRRR')).toBe(119);
    });

    it('should return seat ID 357 from boarding pass BBFFBBFRLL', () => {
      expect(getSeatID('BBFFBBFRLL')).toBe(820);
    });
  });

  describe('using realInput', () => {
    it('should return the highest seat ID from the list', () => {
      expect(getHighestSeatID(realInput)).toBeGreaterThan(0);
    });

    it('SOLUTION: should return the 801 as the highest seat ID from the list', () => {
      expect(getHighestSeatID(realInput)).toBe(801);
    });
  });
});
