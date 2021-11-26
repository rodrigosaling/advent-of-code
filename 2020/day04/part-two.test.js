import {
  invalidPassports,
  realInput,
  requiredFields,
  validPassports,
} from './inputs';
import {
  convertHgtToNumber,
  countValidPassportsAndFields,
  isFieldValid,
  makeArrayOfPassports,
} from './functions';

describe('Day 4 part two', () => {
  describe('using testInput', () => {
    it('should return true if byr is 2002', () => {
      expect(isFieldValid('byr', '2002')).toBeTruthy();
    });

    it('should return false if byr is 2003', () => {
      expect(isFieldValid('byr', '2003')).toBeFalsy();
    });

    it('should convert 60in to 60', () => {
      expect(convertHgtToNumber('60in')).toEqual(60);
    });

    it('should convert 170cm to 170', () => {
      expect(convertHgtToNumber('170cm')).toEqual(170);
    });

    it('should return true if hgt is 60in', () => {
      expect(isFieldValid('hgt', '60in')).toBeTruthy();
    });

    it('should return true if hgt is 190cm', () => {
      expect(isFieldValid('hgt', '190cm')).toBeTruthy();
    });

    it('should return false if hgt is 190in', () => {
      expect(isFieldValid('hgt', '190in')).toBeFalsy();
    });

    it('should return false if hgt is 190', () => {
      expect(isFieldValid('hgt', '190')).toBeFalsy();
    });

    it('should return true if hcl is #123abc', () => {
      expect(isFieldValid('hcl', '#123abc')).toBeTruthy();
    });

    it('should return false if hcl is #123abz', () => {
      expect(isFieldValid('hcl', '#123abz')).toBeFalsy();
    });

    it('should return false if hcl is 123abc', () => {
      expect(isFieldValid('hcl', '123abc')).toBeFalsy();
    });

    it('should return true if ecl is brn', () => {
      expect(isFieldValid('ecl', 'brn')).toBeTruthy();
    });

    it('should return false if ecl is wat', () => {
      expect(isFieldValid('ecl', 'wat')).toBeFalsy();
    });

    it('should return true if pid is 000000001', () => {
      expect(isFieldValid('pid', '000000001')).toBeTruthy();
    });

    it('should return false if pid is 0123456789', () => {
      expect(isFieldValid('pid', '0123456789')).toBeFalsy();
    });

    it('should confirm that all passports are invalid', () => {
      const passports = makeArrayOfPassports(invalidPassports);
      expect(countValidPassportsAndFields(passports, requiredFields)).toEqual(
        0
      );
    });

    it('should confirm that all passports are valid', () => {
      const passports = makeArrayOfPassports(validPassports);
      expect(countValidPassportsAndFields(passports, requiredFields)).toEqual(
        4
      );
    });
  });

  describe('using a custom input', () => {});

  describe('using realInput', () => {
    it('SOLUTION: should count the number of valid passports with valid fields and be equal to 156', () => {
      const passports = makeArrayOfPassports(realInput);
      expect(countValidPassportsAndFields(passports, requiredFields)).toEqual(
        156
      );
    });
  });
});
