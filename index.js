'use strict';

const util = require('util');
const net = require('net');
const cares = process.binding('cares_wrap');

const _getaddrinfo = cares.getaddrinfo;

class DNSHijacking {
  constructor(hosts) {
    this._hosts = util._extend({}, hosts);
  }

  set config(hosts) {
    Object.assign(this._hosts, hosts);
  }

  setup() {
    const _hosts = this._hosts;
    cares.getaddrinfo = (req, hostname, family, hints) => {
      if (_hosts[hostname]) {
        return req.callback(null, _hosts[hostname], net.isIPv6(_hosts[
          hostname]) ? 6 : 4);
      }
      return _getaddrinfo(req, hostname, family, hints);
    };
  }

  reset() {
    cares.getaddrinfo = _getaddrinfo;
  }

  resetConfig() {
    Object.keys(this._hosts).map(key => delete this._hosts[key]);
  }
}

module.exports = DNSHijacking;
