'use strict';

var hasSymbols = require('has-symbols')();
var isSymbol = require('is-symbol');
var flatMap = require('array.prototype.flatmap');
var ownKeys = require('reflect.ownkeys');
var callBound = require('call-bound');

var symbolValueOf = callBound('Symbol.prototype.valueOf', true);

var result;

if (hasSymbols) {
	var wellKnownSymbols = hasSymbols && flatMap(
		ownKeys(Symbol),
		function (k) {
			var v = Symbol[k];
			return typeof v === 'symbol' ? v : [];
		}
	);

	var map = { __proto__: null };
	for (var i = 0; i < wellKnownSymbols.length; i += 1) {
		map[wellKnownSymbols[i]] = true;
	}

	result = function isWellKnownSymbol(sym) {
		if (!isSymbol(sym)) {
			return false;
		}
		return (typeof sym === 'symbol' ? sym : symbolValueOf(sym)) in map;
	};
} else {
	// eslint-disable-next-line no-unused-vars
	result = function isWellKnownSymbol(sym) {
		return false;
	};
}

module.exports = result;
