const { expect } = require('chai')
const sinon = require('sinon')

var opts = {
    call: function(msg){ console.log(msg); }
};

describe('test Mock', ()=>{
    it('should pass Hello World to run call()', function(){
        // 1) Creates a mock for the provided object.
        var mock = sinon.mock(opts);

        mock
            .expects('call')  // 2.1 ) Overrides obj.call with a mock function and returns it.
            .once()  // 2.2) Expect the method to be called exactly once.
            .withExactArgs('Hello World'); // 2.3) Expect the method to be called with the provided arguments and no others.

        // 3) Launch testing
        opts.call('Hello World');

        // 4) Restores all mocked methods.
        mock.restore();

        // 5) Verifies all expectations on the mock.
        mock.verify();
    });
});
