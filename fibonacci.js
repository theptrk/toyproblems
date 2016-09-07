var fibBasic = function(n) {
  if (n === 0) {
    return 0; // Should not be first input
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2)
}

// walkthrough
// fibBasic(0);
// => 0

// fibBasic(1);
// => 1

// fibBasic(2);
// => fibBasic(1) + fibBasic(0)
// => 1 + 0
// => 1

// fibBasic(3);
// => fibBasic(2) + fibBasic(1)
// => fibBasic(1) + fibBasic(0) + fibBasic(1)
// => 1 + 0 + 1
// => 2

// fibBasic(4);
// => fibBasic(3) + fibBasic(2)
// => fibBasic(2) + fibBasic(1) + fibBasic(1) + fibBasic(0)
// => fibBasic(1) + fibBasic(0) + fibBasic(1) + fibBasic(1) + fibBasic(0)
// => 1 + 0 + 1 + 1 + 0
// => 3

// what is the fib sequence?
// 1, 1, 2, 3, 5, 8, 13, 21, 34

var fibMemo = function(n) {
  var cache = {};
  return (function(n) {
    var calculate = function(_n) {
      if(cache[_n]) return cache[_n];
      if(_n === 0) return 0;
      if(_n === 1) return 1;
      cache[_n] = calculate(_n - 1) + calculate(_n - 2);
      return cache[_n];
    }
    return calculate(n);
  })(n);
}
