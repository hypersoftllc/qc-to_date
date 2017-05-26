
import { to_date, toDate } from './index';

describe('qc-to_date', () => {

  describe('`toDate`', () => {

    it('should be a function', () => {
      expect(typeof toDate).toBe('function');
    });

    it('called with no arguments should return default default value', () => {
      expect(toDate()).toBeNull();
    });

    it('called with `arguments` should return default default value', function () {
      expect(toDate(arguments)).toBeNull();
    });

    it('called with `undefined` input should return default value', () => {
      expect(toDate(undefined)).toBeNull();
      expect(toDate(undefined, { def: null })).toBeNull();
      expect(toDate(undefined, { def: undefined })).toBeUndefined();
    });

    it('called with `null` input should return default value', () => {
      expect(toDate(null)).toBeNull();
      expect(toDate(null, { def: null })).toBeNull();
      expect(toDate(null, { def: undefined })).toBeUndefined();
    });

    it('called with `NaN` should return default default value', () => {
      expect(toDate(NaN)).toBeNull();
    });

    it('called with `false` input should return default value', () => {
      expect(toDate(false)).toBeNull();
      expect(toDate(false, { def: null })).toBeNull();
      expect(toDate(false, { def: undefined })).toBeUndefined();
    });

    it('called with `true` input should return default value', () => {
      expect(toDate(true)).toBeNull();
      expect(toDate(true, { def: null })).toBeNull();
      expect(toDate(true, { def: undefined })).toBeUndefined();
    });

    it('called with `-Infinity` should return default value', () => {
      expect(toDate(-Infinity)).toBeNull();
      expect(toDate(-Infinity, { def: null })).toBeNull();
      expect(toDate(-Infinity, { def: undefined })).toBeUndefined();
    });

    it('called with `Infinity` should return default value', () => {
      expect(toDate(Infinity)).toBeNull();
      expect(toDate(Infinity, { def: null })).toBeNull();
      expect(toDate(Infinity, { def: undefined })).toBeUndefined();
    });

    it('called with empty string input should return default value', () => {
      expect(toDate('')).toBeNull();
      expect(toDate('', { def: null })).toBeNull();
      expect(toDate('', { def: undefined })).toBeUndefined();
    });

    it('called with date input should return the date', () => {
      let input: any, output: any;

      input = new Date(),
      output = toDate(input, {});
      expect(output).toBe(input);
    });

    it('called with an object with a `toDate` function input should return the date', () => {
      let input: any, output: any;

      input = new Date();
      output = toDate(input, {});
      expect(output).toBe(input);

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

  describe('`to_date`', () => {

    it('should be a function', () => {
      expect(typeof to_date).toBe('function');
    });

    it('should be an alias of `toDate`', () => {
      expect(to_date).toBe(toDate);
    });

  });

});
