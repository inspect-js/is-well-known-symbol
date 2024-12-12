'use strict';

var test = require('tape');
var forEach = require('for-each');
var hasSymbols = require('has-symbols')();
var inspect = require('object-inspect');
var v = require('es-value-fixtures');
var IntlFallbackSymbol = require('intl-fallback-symbol');

var isWellKnownSymbol = require('../');

test('isWellKnownSymbol', function (t) {
	t.equal(typeof isWellKnownSymbol, 'function', 'is a function');

	t.test('non-symbols', function (st) {
		forEach([].concat(
			// @ts-expect-error TS sucks with concat
			v.nonSymbolPrimitives,
			v.objects
		), function (nonSymbol) {
			st.equal(isWellKnownSymbol(nonSymbol), false, inspect(nonSymbol) + ' is not a Symbol');
		});

		st.end();
	});

	t.test('symbols', { skip: !hasSymbols }, function (st) {
		var uniqueSymbol = Symbol();
		st.equal(
			isWellKnownSymbol(uniqueSymbol),
			false,
			inspect(uniqueSymbol) + ' is not a well-known Symbol'
		);

		forEach(v.strings, function (str) {
			var sym = Symbol['for'](str); // eslint-disable-line no-restricted-properties
			var obj = Object(sym);

			st.equal(
				isWellKnownSymbol(sym),
				false,
				inspect(sym) + ' is not a well-known Symbol'
			);
			st.equal(
				isWellKnownSymbol(obj),
				false,
				inspect(obj) + ' boxes ' + inspect(sym) + ', a non-well-known Symbol'
			);
		});

		forEach(v.wellKnownSymbols, function (sym) {
			var obj = Object(sym);

			st.equal(
				isWellKnownSymbol(sym),
				true,
				inspect(sym) + ' is a well-known Symbol'
			);
			st.equal(
				isWellKnownSymbol(obj),
				true,
				inspect(obj) + ' boxes ' + inspect(sym) + ', a well-known Symbol'
			);
		});

		st.test('Intl Fallback Symbol', { skip: !IntlFallbackSymbol }, function (s2t) {
			s2t.equal(
				isWellKnownSymbol(IntlFallbackSymbol),
				false,
				'IntlFallbackSymbol is not a well-known symbol'
			);

			s2t.end();
		});

		st.end();
	});

	t.end();
});
