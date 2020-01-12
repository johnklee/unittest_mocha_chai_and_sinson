const expect = require('chai').expect;
const sinon = require('sinon');
const testModule = require('../cmp');

describe('Test comparePeople', function(){
    it('should call the callback function', function(){
        var nameList = ['Nina', 'Ricky'];
        var callback = sinon.spy();
        testModule.comparePeople(nameList[0], nameList[0], callback);
        console.log(callback.callCount); // The calling time
        expect(callback.callCount).to.equal(1)
    });
});
