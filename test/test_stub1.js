const { expect } = require('chai');
const sinon = require('sinon');
const uuid = require('node-uuid');

describe('stub example', function(){
    it('check length of uuid', ()=> {
        var stub = sinon.stub(uuid, 'v4');
        var mockId = stub.v4();
        expect(mockId.length).to.equal(36);
        uuid.v4.restore();
    });
});
