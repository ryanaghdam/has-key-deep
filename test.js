var assert = require('assert');
var hasKeyDeep = require('./index');

describe('hasKeyDeep()', function () {
  var testObject = { a: { b: { c: 1 } } };

  context('key is not defined', function () {
    it('should throw an error', function () {
      assert.throws(function () {
        hasKeyDeep({});
      }, /key is required/);
    });
  });

  context('object is not defined', function () {
    it('should throw an error', function () {
      assert.throws(function () {
        hasKeyDeep();
      }, /object is required/);
    });
  });

  context('empty object', function () {
    it('should return false when query is a string', function () {
      var result = hasKeyDeep({}, 'a.b');
      assert(!result, 'result should be false');
    });

    it('should return false when query is an array', function () {
      var result = hasKeyDeep({}, ['a', 'b']);
      assert(!result, 'result should be false');
    });
  });

  context('valid string queries', function () {
    it('should return true when the key is present (1)', function () {
      assert(hasKeyDeep(testObject, 'a'));
    });

    it('should return true when the key is present (2)', function () {
      assert(hasKeyDeep(testObject, 'a.b'));
    });

    it('should return true when the key is present (3)', function () {
      assert(hasKeyDeep(testObject, 'a.b.c'));
    });
  });

  context('valid array queries', function () {
    it('should return true when the key is present (1)', function () {
      assert(hasKeyDeep(testObject, ['a']));
    });

    it('should return true when the key is present (2)', function () {
      assert(hasKeyDeep(testObject, ['a', 'b']));
    });

    it('should return true when the key is present (3)', function () {
      assert(hasKeyDeep(testObject, ['a', 'b', 'c']));
    });
  });

  context('invalid string queries', function () {
    it('should return false when the key is not present (1)', function () {
      assert(!hasKeyDeep(testObject, 'a.b.c.d'));
    });

    it('should return false when the key is not present (2)', function () {
      assert(!hasKeyDeep(testObject, 'a.c'));
    });

    it('should return false when the key is not present (3)', function () {
      assert(!hasKeyDeep(testObject, 'c'));
    });
  });

  context('invalid array queries', function () {
    it('should return false when the key is not present (1)', function () {
      assert(!hasKeyDeep(testObject, ['a', 'b', 'c', 'd']));
    });

    it('should return false when the key is not present (2)', function () {
      assert(!hasKeyDeep(testObject, ['a', 'c']));
    });

    it('should return false when the key is not present (3)', function () {
      assert(!hasKeyDeep(testObject, ['c']));
    });
});
});


