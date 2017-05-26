# qc-to_date

[![Build Status][travis-svg]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

A simple JavaScript utility to convert various values to a Date.


## Installation

```sh
npm install --save qc-to_date
```


## Example Usage

```js
import { toDate } from 'qc-to_date';

toDate(946684800000);   // Date on 2000-01-01T00:00:00.000 UTC
toDate(new Date());     // The Date input
toDate({ toDate() { return 946684800000; } });  // The Date created from the
                                                // number returned from
                                                // `toDate`
toDate({ toDate() { return new Date(); } });    // The Date returned from
                                                // `toDate`
```


[coverage-image]: https://coveralls.io/repos/github/hypersoftllc/qc-to_date/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/hypersoftllc/qc-to_date?branch=master
[downloads-image]: http://img.shields.io/npm/dm/qc-to_date.svg
[downloads-url]: http://npm-stat.com/charts.html?package=qc-to_date
[license-image]: http://img.shields.io/npm/l/qc-to_date.svg
[license-url]: LICENSE
[package-url]: https://npmjs.org/package/qc-to_date
[npm-badge-png]: https://nodei.co/npm/qc-to_date.png?downloads=true&stars=true
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-to_date.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-to_date
