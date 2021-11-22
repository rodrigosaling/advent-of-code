import { realInput, testInput } from './inputs';
import { getPassportFields, makeArrayOfPassports } from './functions';

describe('Day 3 part one', () => {
  describe('using testInput', () => {
    it('should return an array with 4 passports', () => {
      expect(makeArrayOfPassports(testInput).length).toEqual(4);
    });

    it('should return 7 fields for the first passport', () => {
      const passports = makeArrayOfPassports(testInput);
      const fields = getPassportFields(passports[0]);
      expect(fields.length).toEqual(8);
    });
  });

  describe('using a custom input', () => {});

  describe('using realInput', () => {});
});
