'use strict';

var hasSymbols = require('has-symbols')();
var isSymbol = require('is-symbol');
var ownKeys = require('reflect.ownkeys');
var callBound = require('call-bound');

/** @type {import('.') | undefined} */
var result;

if (hasSymbols) {
	var symbolValueOf = callBound('Symbol.prototype.valueOf');
	var symKeys = ownKeys(Symbol);

	/** @type {{ __proto__: null } & { [k in import('.').WellKnownSymbol]?: true }} */
	var map = { __proto__: null };

	for (var i = 0; i < symKeys.length; i += 1) {
		var v = Symbol[symKeys[i]];
		if (typeof v === 'symbol') {
			// eslint-disable-next-line no-extra-parens
			map[/** @type {import('.').WellKnownSymbol} */ (/** @type {unknown} */ (v))] = true;
		}
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
