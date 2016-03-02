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
module.exports = function hasKeyDeep(object, key) {
  if (typeof object === 'undefined') {
    throw new Error('object is required');
  }

  if (typeof key === 'undefined') {
    throw new Error('key is required');
  }

  // key is a string, then reassign it to an array-representation of the
  // value.
  if (typeof key === 'string') {
    key = key.split('.');
  }

  // Termination case (1)
  if (key.length === 0) {
      return true;
  }

  // Termination case (2)
  if (key.length === 1) {
      return object.hasOwnProperty(key[0]);
  }

  // Recursive case
  if (object.hasOwnProperty(key[0])) {
      return hasKeyDeep(object[key[0]], key.slice(1));
  } else {
      return false;
  }
};
