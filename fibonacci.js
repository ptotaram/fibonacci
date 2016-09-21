var Fibonacci = function() {}

var getSequence = function (limit) {
  var fib = [1, 1];
  for (var i = 0; i < limit - 2; i++) {
    var temp = fib[(fib.length - 1)] + fib[(fib.length - 2)];
    fib.push(temp);
  }
  return fib;
}

var getNthElement = function(element) {
  var s = getSequence(element);
  return s[(s.length - 1)];
} 

Fibonacci.prototype.getSequence = getSequence;
Fibonacci.prototype.getNthElement = getNthElement;
module.exports = Fibonacci