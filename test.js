var assert = require('assert');
var hasKeyDeep = require('./index');

describe('hasKeyDeep()', function () {
  var testObject = { a: { b: { c: 1 } } };

  context('empty object', function () {
    it('should return false when query is a string', function () {
      var result = hasKeyDeep('a.b', {});
      assert(!result, 'result should be false');
    });

    it('should return false when query is an array', function () {
      var result = hasKeyDeep(['a', 'b'], {});
      assert(!result, 'result should be false');
    });
  });

  context('valid string queries', function () {
    it('should return true when the key is present (1)', function () {
      assert(hasKeyDeep('a', testObject));
    });

    it('should return true when the key is present (2)', function () {
      assert(hasKeyDeep('a.b', testObject));
    });

    it('should return true when the key is present (3)', function () {
      assert(hasKeyDeep('a.b.c', testObject));
    });

    it('should return true if the value is null', function () {
      assert(!hasKeyDeep('b.c', { a: { b: null } }));
    });
  });

  context('valid array queries', function () {
    it('should return true when the key is present (1)', function () {
      assert(hasKeyDeep(['a'], testObject));
    });

    it('should return true when the key is present (2)', function () {
      assert(hasKeyDeep(['a', 'b'], testObject));
    });

    it('should return true when the key is present (3)', function () {
      assert(hasKeyDeep(['a', 'b', 'c'], testObject));
    });
  });

  context('invalid string queries', function () {
    it('should return false when the key is not present (1)', function () {
      assert(!hasKeyDeep('a.b.c.d', testObject));
    });

    it('should return false when the key is not present (2)', function () {
      assert(!hasKeyDeep('a.c', testObject));
    });

    it('should return false when the key is not present (3)', function () {
      assert(!hasKeyDeep('c', testObject));
    });
  });

  context('invalid array queries', function () {
    it('should return false when the key is not present (1)', function () {
      assert(!hasKeyDeep(['a', 'b', 'c', 'd'], testObject));
    });

    it('should return false when the key is not present (2)', function () {
      assert(!hasKeyDeep(['a', 'c'], testObject));
    });

    it('should return false when the key is not present (3)', function () {
      assert(!hasKeyDeep(['c'], testObject));
    });

    it('should return true if the value is null', function () {
      assert(!hasKeyDeep(['b', 'c'], { a: { b: null } }));
    });
  });
});

