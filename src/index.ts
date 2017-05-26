
import { toInt } from 'qc-to_int';
import { typeOf } from 'qc-type_of';

// ==========================================================================
/**
 * Converts a date-like object to a date.  Three date-like objects are
 * recognized.
 *
 * 1. A `Date` instance.  It gets returned without modification.
 * 2. A number.  It will be interpreted as the number of milliseconds from the
 *    UNIX epoch.
 * 3. An object with a property named `toDate` that is a function which returns
 *    a `Date` instance when called with no arguments.  A Moment instance from
 *    the Moment library is an example of such an object.
 *
 * Example Usage:
 *
 * ```js
 * let date;
 * date = toDate(new Date()); // options don't matter.
 * date = toDate(1234567890); // options don't matter.
 * ```
 *
 * @param {(Date|number)} input - The value to convert to a `Date` instance.
 * @param {Object} [options] - The options to use when parsing.
 * @param {*} [options.def=null] - The default value to return if unable to
 *   convert.
 *
 * @returns {(Date|*)} The input converted to a date or the default value if
 *   unable to convert.
 */
function toDate(input?: any, opts?: { def?: any }): any {
  let coersedInput: any, defValue: any, output: any, typeOfInput: string;

  opts = opts || {};

  coersedInput = input;
  // If input is a moment instance or like a moment instance with a `toDate` function, then attempt to convert to a Date.
  if (input && typeof input.toDate == 'function') {
    coersedInput = input.toDate();
  }

  if (coersedInput instanceof Date) {
    return coersedInput;
  }

  typeOfInput = typeOf(coersedInput);
  if (typeOfInput == 'number') {
    coersedInput = toInt(coersedInput);
    output = new Date(coersedInput);
  }

  if (!(output instanceof Date)) {
    defValue = opts.hasOwnProperty('def') ? opts.def : null;
    output = defValue;
  }
  return output;
}


// ==========================================================================
export { toDate, toDate as to_date };
