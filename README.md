# dns-hijacking

Node.js DNS hijacking tool.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/dns-hijacking.svg?style=flat-square
[npm-url]: https://npmjs.org/package/dns-hijacking
[travis-image]: https://img.shields.io/travis/node-modules/dns-hijacking.svg?style=flat-square
[travis-url]: https://travis-ci.org/node-modules/dns-hijacking
[codecov-image]: https://codecov.io/github/node-modules/dns-hijacking/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/node-modules/dns-hijacking?branch=master
[david-image]: https://img.shields.io/david/node-modules/dns-hijacking.svg?style=flat-square
[david-url]: https://david-dm.org/node-modules/dns-hijacking
[snyk-image]: https://snyk.io/test/npm/dns-hijacking/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/dns-hijacking
[download-image]: https://img.shields.io/npm/dm/dns-hijacking.svg?style=flat-square
[download-url]: https://npmjs.org/package/dns-hijacking

## Installation

```bash
$ npm install dns-hijacking --save
```

## Quick start

```js
  const DNSHijacking = require('dns-hijacking');
  const hosts = { 'nodejs.org': '127.0.0.1' }; // also support IPV6. e.g: { 'nodejs.org': '2607:f8b0:4003:c18::65' }
  const dNSHijacking = new DNSHijacking(hosts);

  // doing logic under the hijacking
  dNSHijacking.setup();

  // reset the hijacking
  dNSHijacking.reset();

```

## API

DNSHijacking

- constructor(hosts) *`hosts` this hijacking host config.*
- config  *`setter` custuom config the hijacking host.*
- setup() *start hijacking.*
- reset() *stop hijacking.*
- resetConfig() *reset the hijacking host.*

## License
[MIT](LICENSE)
