var expect = require('chai').expect;
var addOp = require('./../../services/operations.js').addOp;


describe('Math', function () {
    describe('#add function', function () {
        it('should returns the result from the two arguments', function () {
            let result = addOp(3, 9);
            expect(result).to.equal(12);
        });
    });
});

describe('Math', function () {
    describe('#add function', function () {
        it('should returns the result from the two arguments. One of them is NULL, should be cast to 0', function () {
            let result = addOp(null, 9);
            expect(result).to.equal(9);
        });
    });
});
