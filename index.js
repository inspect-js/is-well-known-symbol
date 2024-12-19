'use strict';

var hasSymbols = require('has-symbols')();
var isSymbol = require('is-symbol');
var flatMap = require('array.prototype.flatmap');
var ownKeys = require('reflect.ownkeys');
var callBound = require('call-bound');

/** @type {import('.') | undefined} */
var result;

if (hasSymbols) {
	var symbolValueOf = callBound('Symbol.prototype.valueOf');
	var wellKnownSymbols = hasSymbols && flatMap(
		ownKeys(Symbol),
		function (k) {
			var v = Symbol[k];
			// eslint-disable-next-line no-extra-parens
			return typeof v === 'symbol' ? /** @type {[import('.').WellKnownSymbol]} */ (/** @type {unknown} */ (v)) : [];
		}
	);

	/** @type {{ __proto__: null } & { [k in import('.').WellKnownSymbol]?: true }} */
	var map = { __proto__: null };
	for (var i = 0; i < wellKnownSymbols.length; i += 1) {
		map[wellKnownSymbols[i]] = true;
	}

	result = /** @type {import('.')} */ function isWellKnownSymbol(sym) {
		if (!isSymbol(sym)) {
			return false;
		}
		return (typeof sym === 'symbol' ? sym : symbolValueOf(sym)) in map;
	};
} else {
	// eslint-disable-next-line no-unused-vars
	result = /** @type {import('.')} */ function isWellKnownSymbol(_sym) {
		return false;
	};
}

/** @type {import('.')} */
module.exports = result;
