const sinon = require('sinon');
const { expect } = require('chai')

class A{
    constructor(){}

    add(a, b){
        let sum = a + b;
        return sum
    }
}

describe('test A', ()=>{
    it('demo usage of stub API', function(){
        const a = new A();

        // 1) API:callsFake
        sinon.stub(a, 'add').callsFake(function(a, b){
            return 0
        })

        var sum = a.add(1, 2)
        expect(a.add(1, 2)).to.equal(0)

        // 2) Restore add
        a.add.restore()
        expect(a.add(1, 2)).to.equal(3)

        // 3) API:withArgs,callThrough
        var obj = {};
        obj.sum = function sum(a, b){ return a + b; };
        sinon.stub(obj, 'sum')
        obj.sum.withArgs(2, 2).callsFake(function foo(){ return 'bar'; });
        obj.sum.callThrough();
        expect(obj.sum(2, 2)).to.equal('bar')
        expect(obj.sum(1, 2)).to.equal(3)
        obj.sum.restore()
        expect(obj.sum(2, 2)).to.equal(4)
    });
});
