const { expect } = require('chai')
const testModule = require('../op');

describe('Test add', () => {
  it('1 + 2 = 3', () => {
    expect(testModule.add(1, 2)).to.equal(3);
  });

  it('3 + 4 = 7', () => {
    expect(testModule.add(3, 4)).to.equal(7);
  });
});

describe('Test sub', () => {
  it('1 - 2 = -1', () => {
    expect(testModule.sub(1, 2)).to.equal(-1);
  });

  it('11 - 4 = 7', () => {
    expect(testModule.sub(11, 4)).to.equal(7);
  });
});
