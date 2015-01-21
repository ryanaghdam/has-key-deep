var assert = require('assert');
var hasKeyDeep = require('./index');

var testObject = { a: { b: { c: 1 } } };

assert(hasKeyDeep(testObject, 'a'));
assert(hasKeyDeep(testObject, 'a.b'));
assert(hasKeyDeep(testObject, 'a.b.c'));
assert(hasKeyDeep(testObject, ['a']));
assert(hasKeyDeep(testObject, ['a', 'b']));
assert(hasKeyDeep(testObject, ['a', 'b', 'c']));
assert(!hasKeyDeep(testObject, 'a.b.c.d'));
assert(!hasKeyDeep(testObject, 'a.c'));
assert(!hasKeyDeep(testObject, 'c'));
assert(!hasKeyDeep({}, 'a'));
assert(!hasKeyDeep({}, 'a.b'));
assert(!hasKeyDeep({}, ['a', 'b']));
