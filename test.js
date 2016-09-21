var Fibonacci = require('./fibonacci');
var test = require('unit.js');

var fib = new Fibonacci();
describe('Fibonacci', function () {
  describe('getFibonacci', function () {
    var sequence = fib.getSequence(5)
    it('should return an array with 1 at the first element', function (done) {
      test.value(sequence[0]).is(1);
      done();
    });
    it('Should return 1 at the second element', function (done) {
      test.value(sequence[1]).is(1);
      done();
    });
    it('should return 2 at the third element', function (done) {
      test.value(sequence[2]).is(2);
      done();
    });
    it('should return 3 at the fourth element', function (done) {
      test.value(sequence[3]).is(3);
      done();
    });
    it('should return 5 at the fifth element', function (done) {
      test.value(sequence[4]).is(5);
      done();
    });
    it('should return undefined at the sixth element', function (done) {
      test.value(sequence[5]).isUndefined();
      done();
    });
  });

  describe('getNthElement', function () {
    it('should return 5', function (done) {
      test.value(fib.getNthElement(5)).is(5);
      done();
    });
    it('should return 13', function (done) {
      test.value(fib.getNthElement(7)).is(13);
      done();
    });
    it('should return 55', function (done) {
      test.value(fib.getNthElement(10)).is(55);
      done();
    });
    it('it should return 144', function (done) {
      test.value(fib.getNthElement(12)).is(144);
      done();
    });
    it('should return 610', function (done) {
      test.value(fib.getNthElement(15)).is(610);
      done();
    });
    it('should return 2584', function (done) {
      test.value(fib.getNthElement(18)).is(2584);
      done();
    });
  });
});