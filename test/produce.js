const assert = require('chai').assert;
const price = require('../produce');
describe('Finding total price of produce', ()=>{

    it('Test 1', ()=>{
        assert.equal(price(1000, 4500),4500000);
    })

    it('Test 2', ()=>{
        assert.equal(price(1200, 2000),2400000);
    })
})