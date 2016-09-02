module.exports = function(arr) {
  var allPasses = true;
  return arr.reduce(function(acc, test) {
    console.log('=== acc ===');
    console.log(acc);
    console.log('=== test ===');
    console.log(test);
    if (!acc) return false;
    if (!test) return false;
    return acc;
  }, true)
}