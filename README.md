hasKeyDeep
==========

[![Build Status](https://travis-ci.org/ryanaghdam/has-key-deep.svg?branch=master)](https://travis-ci.org/ryanaghdam/has-key-deep)

Deep-search objects for keys.  Keys can be searched by providing an array of
keys, or using a dot-notiation.

Examples
--------

Complete application

```javascript
hasKeyDeep({ a: { b: { c: 1 } } }, 'a.b.c') => true
hasKeyDeep({ a: { b: { c: 1 } } }, ['a', 'b', 'c']) => true
hasKeyDeep({ a: { b: { c: 1 } } }, 'a.b.c.d') => true
hasKeyDeep({ a: { b: { c: 1 } } }, 'a.c') => false
hasKeyDeep({}, 'a') => false
```


Partial application


```javascript
var hasABC = hasKeyDeep('a.b.c');
hasAbc({a: { b: { c: 1 } } }) => true
hasAbc({a: 1 }) => false
```

Changelog
---------

- v2.0.0: Switches order of arguments, provides curried function if only one is
supplied. (3/14/2016)
- v1.0.1: Updates build status in README (3/3/2016)
- v1.0.0: Adds argument validation; mocha tests (3/2/2016)
- v0.0.3: Updated repository field in package.json (2/1/2015)
- v0.0.2: Minor refactoring for better readability (1/22/2015)
- v0.0.1: Initial release (1/22/2015)
