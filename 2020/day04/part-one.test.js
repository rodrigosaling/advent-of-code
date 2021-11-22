import { realInput, requiredFields, testInput } from './inputs';
import {
  countValidPassports,
  getPassportFields,
  isPassportValid,
  makeArrayOfPassports,
} from './functions';

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

    it('should correctly set the required fields without the "cid" field', () => {
      expect(requiredFields).toEqual([
        'byr',
        'iyr',
        'eyr',
        'hgt',
        'hcl',
        'ecl',
        'pid',
      ]);
    });

    it('should set the first passport as valid', () => {
      const passports = makeArrayOfPassports(testInput);
      expect(isPassportValid(passports[0], requiredFields)).toBeTruthy();
    });

    it('should set the second passport as invalid', () => {
      const passports = makeArrayOfPassports(testInput);
      expect(isPassportValid(passports[1], requiredFields)).toBeFalsy();
    });

    it('should set the third passport as valid', () => {
      const passports = makeArrayOfPassports(testInput);
      expect(isPassportValid(passports[2], requiredFields)).toBeTruthy();
    });

    it('should set the fourth passport as invalid', () => {
      const passports = makeArrayOfPassports(testInput);
      expect(isPassportValid(passports[3], requiredFields)).toBeFalsy();
    });
  });

  describe('using a custom input', () => {});

  describe('using realInput', () => {
    it('SOLUTION: should count the number of valid passports and be equal to 230', () => {
      const passports = makeArrayOfPassports(realInput);
      expect(countValidPassports(passports, requiredFields)).toEqual(230);
    });
  });
});
