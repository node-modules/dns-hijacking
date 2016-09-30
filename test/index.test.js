'use strict';

const DNSHijacking = require('../');
const assert = require('power-assert');
const dns = require('dns');

describe('index.test.js', () => {
  const hosts = {
    'cnpmjs.org': '127.0.0.1',
  };
  const dNSHijacking = new DNSHijacking(hosts);
  const cnpmjs = 'cnpmjs.org';

  afterEach(dNSHijacking.reset);

  it('should work', done => {
    dNSHijacking.setup();
    dns.lookup(cnpmjs, (err, address, family) => {
      assert(err === null);
      assert(address === '127.0.0.1');
      assert(family === 4);
      done();
    });
  });

  it('should reset ok', done => {
    dNSHijacking.setup();
    dNSHijacking.reset();

    dns.lookup(cnpmjs, (err, address, family) => {
      assert(err === null);
      assert(address === '47.88.240.14');
      assert(family === 4);
      done();
    });
  });

  it('should set config ok', done => {
    dNSHijacking.setup();
    dNSHijacking.config = {
      'cnpmjs.org': '192.168.0.1',
    };
    dns.lookup(cnpmjs, (err, address, family) => {
      assert(err === null);
      assert(address === '192.168.0.1');
      assert(family === 4);
      done();
    });
  });

  it('should reset config ok', done => {
    dNSHijacking.setup();
    dNSHijacking.config = {
      'cnpmjs.org': '192.168.0.1',
    };
    dNSHijacking.resetConfig();
    dns.lookup(cnpmjs, (err, address, family) => {
      assert(err === null);
      assert(address === '47.88.240.14');
      assert(family === 4);
      done();
    });
  });

  it('should support IPV6', done => {
    dNSHijacking.setup();
    dNSHijacking.config = {
      'cnpmjs.org': '2607:f8b0:4003:c18::65',
    };
    dns.lookup(cnpmjs, (err, address, family) => {
      assert(err === null);
      assert(address === '2607:f8b0:4003:c18::65');
      assert(family === 6);
      done();
    });
  });
});
