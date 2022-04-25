'use strict';

var hasSymbols = require('has-symbols')();
var isSymbol = require('is-symbol');
var flatMap = require('array.prototype.flatmap');
var ownKeys = require('reflect.ownkeys');
var IntlFallbackSymbol = require('intl-fallback-symbol');
var callBound = require('call-bind/callBound');

var symbolValueOf = callBound('Symbol.prototype.valueOf', true);

var wellKnownSymbols = hasSymbols && flatMap(
	ownKeys(Symbol),
	function (k) {
		var v = Symbol[k];
		return typeof v === 'symbol' ? v : [];
	}
).concat(IntlFallbackSymbol || []);

var map = { __proto__: null };
for (var i = 0; i < wellKnownSymbols.length; i += 1) {
	map[wellKnownSymbols[i]] = true;
}

module.exports = hasSymbols
	? function isWellKnownSymbol(sym) {
		if (!isSymbol(sym)) {
			return false;
		}
		return (typeof sym === 'symbol' ? sym : symbolValueOf(sym)) in map;
	}
	// eslint-disable-next-line no-unused-vars
	: function isWellKnownSymbol(sym) {
		return false;
	};
