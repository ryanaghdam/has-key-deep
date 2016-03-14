var R = require('ramda');

// hasKeyDeep(key, object) -> boolean
//
// Key is one of:
//   - an array of key names, or
//   - a single, dot-separated string.
//
// Return true of the object has a matching key.
function hasKeyDeep(key, object) {
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
      return hasKeyDeep(key.slice(1), object[key[0]]);
  } else {
      return false;
  }
};

module.exports = R.curry(hasKeyDeep);
