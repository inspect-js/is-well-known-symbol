# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.1.2](https://github.com/inspect-js/is-well-known-symbol/compare/v1.1.1...v1.1.2) - 2024-12-29

### Commits

- [Refactor] use `own-keys` directly [`94653e4`](https://github.com/inspect-js/is-well-known-symbol/commit/94653e4683da4860210e23c605982d0dce194054)
- [Dev Deps] update `@arethetypeswrong/cli`, `@ljharb/tsconfig` [`10ea846`](https://github.com/inspect-js/is-well-known-symbol/commit/10ea8469f725da96a726e0743872dd0900e5fc17)

## [v1.1.1](https://github.com/inspect-js/is-well-known-symbol/compare/v1.1.0...v1.1.1) - 2024-12-19

### Commits

- [Refactor] use 1 iteration instead of 2; drop flatmap dep [`c1f8dd3`](https://github.com/inspect-js/is-well-known-symbol/commit/c1f8dd3bdb2f19a8c136e183dd32c52711f00039)
- [Deps] update `array.prototype.flatmap`, `call-bound`, `is-symbol` [`388ff14`](https://github.com/inspect-js/is-well-known-symbol/commit/388ff140a415dcdfa04b0cd21872a83e6da59150)
- [Dev Deps] update `@types/tape`, `intl-fallback-symbol` [`6f1e193`](https://github.com/inspect-js/is-well-known-symbol/commit/6f1e19303c6bf0ee1d0cdcef0a105270f068c3f3)
- [Refactor] throw if hasSymbols, but no valueOf exists [`cebb825`](https://github.com/inspect-js/is-well-known-symbol/commit/cebb82582d82720b9cafb1d625b4f254819d67a3)
- [meta] add `sideEffects` flag [`a0d5ebc`](https://github.com/inspect-js/is-well-known-symbol/commit/a0d5ebca7a558beda1b849f27b0734ade738a177)

## [v1.1.0](https://github.com/inspect-js/is-well-known-symbol/compare/v1.0.1...v1.1.0) - 2024-12-18

### Commits

- [New] add types [`c5da9e2`](https://github.com/inspect-js/is-well-known-symbol/commit/c5da9e23d4239a922a5f21eed5a30885a1444297)
- [Refactor] allow more code to be DCEd [`bccfc93`](https://github.com/inspect-js/is-well-known-symbol/commit/bccfc9386aba5546cce08b0572fcd9461ab8fbf1)
- [actions] split out node 10-20, and 20+ [`43d091b`](https://github.com/inspect-js/is-well-known-symbol/commit/43d091bf9541f8c85dce73300f7ad0f3568b2e6c)
- [Dev Deps] update `@ljharb/eslint-config`, `auto-changelog`, `es-value-fixtures`, `intl-fallback-symbol`, `npmignore`, `object-inspect`, `tape` [`cbc222b`](https://github.com/inspect-js/is-well-known-symbol/commit/cbc222b30f44e169e71411b9aaa699e7af907212)
- [actions] update rebase action to use reusable workflow [`9301f1f`](https://github.com/inspect-js/is-well-known-symbol/commit/9301f1fc352415fcd85d52c13753cc7a7c0428ef)
- [Deps] update `array.prototype.flatmap`, `call-bind`, `has-symbols`, `is-symbol`, `reflect.ownkeys` [`00e32b0`](https://github.com/inspect-js/is-well-known-symbol/commit/00e32b093dfe488af8291325d40d89e32206d59f)
- [Refactor] use `call-bound` directly [`359991a`](https://github.com/inspect-js/is-well-known-symbol/commit/359991ae10783cd9a0434d24d67c8596f49cedc6)
- [Dev Deps] update `aud`, `tape` [`b96f3e5`](https://github.com/inspect-js/is-well-known-symbol/commit/b96f3e5d703b87c6248d95b3c36830611d2542f9)
- [Tests] replace `aud` with `npm audit` [`0cbce69`](https://github.com/inspect-js/is-well-known-symbol/commit/0cbce69cb0983e37f1e3a9e6270f9d25ea2df1c4)
- [Dev Deps] add missing peer dep [`d831357`](https://github.com/inspect-js/is-well-known-symbol/commit/d8313577f725d32fd33e727bfbba56558d4e5713)

## [v1.0.1](https://github.com/inspect-js/is-well-known-symbol/compare/v1.0.0...v1.0.1) - 2022-07-20

### Commits

- [meta] use `npmignore` to autogenerate an npmignore file [`3a4d609`](https://github.com/inspect-js/is-well-known-symbol/commit/3a4d609eb30b9cd6b8c7ef065e01f40e633c595c)
- [Fix] `IntlFallbackSymbol` is not a well-known symbol, reconfirmed per 2022.07.20 TC39 [`c21d3b1`](https://github.com/inspect-js/is-well-known-symbol/commit/c21d3b18b46311e6643f673147cf5dd6bc7c9de1)
- [eslint] fix linting errors [`afdfdcb`](https://github.com/inspect-js/is-well-known-symbol/commit/afdfdcbe2b70dc3a8f5d783edb99783dfe86a1fb)
- [Dev Deps] update `es-value-fixtures`, `object-inspect` [`25a96d7`](https://github.com/inspect-js/is-well-known-symbol/commit/25a96d73b1acaa2fdbaa79dc3e5727cbd813d2e3)

## v1.0.0 - 2022-04-25

### Commits

- Initial implementation, tests, readme [`b3f07ec`](https://github.com/inspect-js/is-well-known-symbol/commit/b3f07ec9d562e2788f7edf597e1a3365c3339c15)
- Initial commit [`b8f9443`](https://github.com/inspect-js/is-well-known-symbol/commit/b8f9443d560a1535d12198d6e1a37dd5c1834430)
- npm init [`418d6f0`](https://github.com/inspect-js/is-well-known-symbol/commit/418d6f0a7bab65b94200da0608072021bb715005)
- Only apps should have lockfiles [`cf00bbc`](https://github.com/inspect-js/is-well-known-symbol/commit/cf00bbc4ade3d1d6116106f6fbcee238eb2a1981)
