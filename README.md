# hasKeyDeep

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

- v0.0.3 (2/1/2015) -- Updated repository field in package.json
- v0.0.2 (1/22/2015) -- Minor refactoring for better readability.
- v0.0.1 (1/22/2015) -- Initial release.
