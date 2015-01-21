// hasKeyDeep(object, key) -> boolean
//
// Key is one of:
//   - an array of key names, or
//   - a single, dot-separated string.
//
//
// Return true of the object has a matching key.
//
// Examples:
//
//    hasKeyDeep({ a: { b: { c: 1 } } }, 'a.b.c') => true
//    hasKeyDeep({ a: { b: { c: 1 } } }, ['a', 'b', 'c']) => true
//    hasKeyDeep({ a: { b: { c: 1 } } }, 'a.b.c.d') => true
//    hasKeyDeep({ a: { b: { c: 1 } } }, 'a.c') => false
//    hasKeyDeep({}, 'a') => false
module.exports = function hasKeyDeep(obj, key) {
  // key is a string, then reassign it to an array-representation of the
  // value.
  if (typeof key === 'string') {
    key = key.split('.');
  }

  if (key.length === 0) {
    return true;
  } else if (key.length === 1) {
    return obj.hasOwnProperty(key[0]);
  } else {
    if (obj.hasOwnProperty(key[0])) {
      return hasKeyDeep(obj[key[0]], key.slice(1));
    } else {
      return false;
    }
  }
};
