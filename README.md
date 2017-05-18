# qc-to_date

[![Build Status][travis-svg]][travis-url]
[![License][license-image]][license-url]

A simple JavaScript utility to convert various value to a Date.


## Installation

```sh
npm install --save qc-to_date
```


## Example Usage

```js
import { toDate } from 'qc-to_date';

toDate(946684800000); // Date on 2000-01-01T00:00:00.000 UTC
toDate(new Date()); // The Date input
```


[license-image]: http://img.shields.io/npm/l/qc-to_date.svg
[license-url]: LICENSE
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-to_date.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-to_date
