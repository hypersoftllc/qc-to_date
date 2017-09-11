
// ==========================================================================
/**
 * Converts a date-like object to a date.  Three date-like objects are
 * recognized.
 *
 * If the date-like input cannot be converted to a date, then the default value
 * is returned.  When the default value is undefined, then the input is returned.
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
 * toDate(946684800000);   // Date on 2000-01-01T00:00:00.000 UTC
 * toDate(new Date());     // The Date input
 * toDate({ toDate() { return 946684800000; } });  // The Date created from the
 *                                                 // number returned from
 *                                                 // `toDate`
 * toDate({ toDate() { return new Date(); } });    // The Date returned from
 *                                                 // `toDate`
 * toDate(<not-date-like>);                        // The not-date-like input
 * toDate(<not-date-like>, undefined);             // The not-date-like input
 * toDate(<not-date-like>, null);                  // `null`
 * toDate(<not-date-like>, 0);                     // `0`
 * toDate(<not-date-like>, new Date());            // The new Date
 * toDate(<not-date-like>, { def: {...} });        // The `{...}` object
 * ```
 *
 * @param {*=} input - The value to be converted to a JavaScript date.
 * @param {*=|{ def: *}} [def=undefined] - The default value to return if
 *   unable to convert.  This is allowed to be of any data type.  This may also
 *   be an object with a `def` property.  To return an object as a default value,
 *   then wrap it in an object with a `def` property set to the object that is to
 *   be used as the default value.  A default value resolving to `undefined`
 *   means return the input when not convertible.
 *
 * @returns {(Date|*)} The input converted to a date or the default value if
 *   unable to convert.  Note: a value of type number is not always returned when
 *   the default value is returned.
 */
function toDate(input?: any, def?: any | { def: any }): any {
  let coercedInput: any, output: any;

  if (input instanceof Date) {
    output = input;
  }
  else {
    coercedInput = input;
    // If input has a `toDate` function, then attempt to convert to coerce to a date-like object.
    if (input && typeof input.toDate == 'function') {
      coercedInput = input.toDate();
    }

    if (Number.isFinite(coercedInput)) {
      output = new Date(coercedInput);
    }

    if (!(output instanceof Date)) {
      // Resolve default value:
      if (typeof def == 'object' && def !== null && def.hasOwnProperty('def')) {
        def = def.def;
      }
      else {
        def = def;
      }
      if (def === undefined) {
        def = input;
      }

      output = def;
    }
  }

  return output;
}


/**
 * Like `toDate` but returns `null` if input is not convertible to a `Date`.
 */
function toDateOrNull(input?: any) {
  return toDate(input, null);
}


// ==========================================================================
export { toDate, toDateOrNull };
