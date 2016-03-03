# hasKeyDeep

[![Build Status](https://travis-ci.org/ryanaghdam/has-key-deep.svg?branch=master)](https://travis-ci.org/ryanaghdam/has-key-deep)

Deep-search objects for keys.  Keys can be searched by providing an array of
keys, or using a dot-notiation.

## Examples

```
hasKeyDeep({ a: { b: { c: 1 } } }, 'a.b.c') => true
hasKeyDeep({ a: { b: { c: 1 } } }, ['a', 'b', 'c']) => true
hasKeyDeep({ a: { b: { c: 1 } } }, 'a.b.c.d') => true
hasKeyDeep({ a: { b: { c: 1 } } }, 'a.c') => false
hasKeyDeep({}, 'a') => false
```

## Changelog

- v1.0.0 (3/2/2016) -- Adds argument validation; mocha tests.
- v0.0.3 (2/1/2015) -- Updated repository field in package.json
- v0.0.2 (1/22/2015) -- Minor refactoring for better readability.
- v0.0.1 (1/22/2015) -- Initial release.
