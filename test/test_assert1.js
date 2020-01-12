var { assert } = require("chai")

describe('AssertTest', function() {
    var foo = 'Hello';
    var bar = "World";

    it('should be equal', function() {
        assert(foo === bar, 'foo is not bar');
    });
});
