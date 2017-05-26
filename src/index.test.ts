
import { toDate, toDateOrNull } from './index';

describe('qc-to_date', () => {

  describe('`toDate`', () => {

    it('should be a function', () => {
      expect(typeof toDate).toBe('function');
    });

    it('called with no arguments should return `undefined`', () => {
      expect(toDate()).toBeUndefined();
    });

    it('called with `arguments` should return input value', function () {
      expect(toDate(arguments)).toBe(arguments);
    });

    it('called with `undefined` input should return default value', () => {
      let input = undefined;

      expect(toDate(input)).toBe(input);
      expect(toDate(input, null)).toBeNull();
      expect(toDate(input, { def: null })).toBeNull();
      expect(toDate(input, undefined)).toBe(input);
      expect(toDate(input, { def: undefined })).toBe(input);
    });

    it('called with `null` input should return default value', () => {
      let input = null;

      expect(toDate(input)).toBeNull();
      expect(toDate(input, { def: null })).toBeNull();
      expect(toDate(input, { def: undefined })).toBeNull();
    });

    it('called with `NaN` input should return default value', () => {
      let input = NaN;

      expect(toDate(input)).toEqual(NaN);
      expect(toDate(input, null)).toBeNull();
      expect(toDate(input, { def: null })).toBeNull();
      expect(toDate(input, undefined)).toEqual(NaN);
      expect(toDate(input, { def: undefined })).toEqual(NaN);
    });

    it('called with `false` input should return default value', () => {
      let input = false;

      expect(toDate(input)).toBe(input);
      expect(toDate(input, null)).toBeNull();
      expect(toDate(input, { def: null })).toBeNull();
      expect(toDate(input, undefined)).toBe(input);
      expect(toDate(input, { def: undefined })).toBe(input);
    });

    it('called with `true` input should return default value', () => {
      let input = true;

      expect(toDate(input)).toBe(input);
      expect(toDate(input, null)).toBeNull();
      expect(toDate(input, { def: null })).toBeNull();
      expect(toDate(input, undefined)).toBe(input);
      expect(toDate(input, { def: undefined })).toBe(input);
    });

    it('called with `-Infinity` input should return default value', () => {
      let input = -Infinity;

      expect(toDate(input)).toBe(input);
      expect(toDate(input, null)).toBeNull();
      expect(toDate(input, { def: null })).toBeNull();
      expect(toDate(input, undefined)).toBe(input);
      expect(toDate(input, { def: undefined })).toBe(input);
    });

    it('called with `Infinity` input should return default value', () => {
      let input = Infinity;

      expect(toDate(input)).toBe(input);
      expect(toDate(input, null)).toBeNull();
      expect(toDate(input, { def: null })).toBeNull();
      expect(toDate(input, undefined)).toBe(input);
      expect(toDate(input, { def: undefined })).toBe(input);
    });

    it('called with empty string input should return default value', () => {
      let input = '';

      expect(toDate(input)).toBe(input);
      expect(toDate(input, null)).toBeNull();
      expect(toDate(input, { def: null })).toBeNull();
      expect(toDate(input, undefined)).toBe(input);
      expect(toDate(input, { def: undefined })).toBe(input);
    });

    it('called with date input should return the date', () => {
      let input = new Date();

      expect(toDate(input)).toBe(input);
      expect(toDate(input, null)).toBe(input);
      expect(toDate(input, { def: null })).toBe(input);
      expect(toDate(input, undefined)).toBe(input);
      expect(toDate(input, { def: undefined })).toBe(input);
    });

    it('called with an object with a `toDate` function input should return the date', () => {
      let input: any, output: any;

      input = { toDate: function () { return 946684800000; } };
      output = toDate(input);
      expect(output).toBeDefined();
      expect(output.getUTCFullYear()).toBe(2000);
      expect(output.getUTCMonth()).toBe(0);
      expect(output.getUTCDate()).toBe(1);
      expect(output.getUTCHours()).toBe(0);
      expect(output.getUTCMinutes()).toBe(0);
      expect(output.getUTCSeconds()).toBe(0);
      expect(output.getUTCMilliseconds()).toBe(0);
    });

    it('called with a number input should return the date', () => {
      let input: any, output: any;

      input = 946684800000;
      output = toDate(input);
      expect(output).toBeDefined();
      expect(output.getUTCFullYear()).toBe(2000);
      expect(output.getUTCMonth()).toBe(0);
      expect(output.getUTCDate()).toBe(1);
      expect(output.getUTCHours()).toBe(0);
      expect(output.getUTCMinutes()).toBe(0);
      expect(output.getUTCSeconds()).toBe(0);
      expect(output.getUTCMilliseconds()).toBe(0);
    });

  });

  describe('`toDateOrNull`', () => {

    it('should be a function', () => {
      expect(typeof toDateOrNull).toBe('function');
    });

    it('called with no arguments should return `null`', () => {
      expect(toDateOrNull()).toBeNull();
    });

    it('called with inconvertible input should return `null`', function () {
      expect(toDateOrNull(arguments)).toBeNull();
      expect(toDateOrNull([])).toBeNull();
      expect(toDateOrNull(['not empty'])).toBeNull();
      expect(toDateOrNull(new Error('Help!'))).toBeNull();
      expect(toDateOrNull(function () {})).toBeNull();
      expect(toDateOrNull({})).toBeNull();
      expect(toDateOrNull({ prop: 'not empty' })).toBeNull();
      expect(toDateOrNull(null)).toBeNull();
      expect(toDateOrNull(NaN)).toBeNull();
      expect(toDateOrNull(Number.NaN)).toBeNull();
      expect(toDateOrNull(/regexp/)).toBeNull();
      expect(toDateOrNull('')).toBeNull();
      expect(toDateOrNull('not empty')).toBeNull();
      expect(toDateOrNull(undefined)).toBeNull();
    });

  });

});
