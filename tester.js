module.exports = function(arr) {
  var allPasses = true;
  return arr.reduce(function(acc, test) {
    if (!acc) return false;
    if (!test) return false;
    return acc;
  }, true)
}