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
