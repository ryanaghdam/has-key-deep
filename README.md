hasKeyDeep
==========

[![Build Status](https://travis-ci.org/ryanaghdam/has-key-deep.svg?branch=master)](https://travis-ci.org/ryanaghdam/has-key-deep)

Deep-search objects for keys.  Keys can be searched by providing an array of
keys, or using a dot-notiation.

Examples
--------

```
hasKeyDeep({ a: { b: { c: 1 } } }, 'a.b.c') => true
hasKeyDeep({ a: { b: { c: 1 } } }, ['a', 'b', 'c']) => true
hasKeyDeep({ a: { b: { c: 1 } } }, 'a.b.c.d') => true
hasKeyDeep({ a: { b: { c: 1 } } }, 'a.c') => false
hasKeyDeep({}, 'a') => false
```

Changelog
---------

- v1.0.1: Updates build status in README (3/3/2016)
- v1.0.0: Adds argument validation; mocha tests (3/2/2016)
- v0.0.3: Updated repository field in package.json (2/1/2015)
- v0.0.2: Minor refactoring for better readability (1/22/2015)
- v0.0.1: Initial release (1/22/2015)
