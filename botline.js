module.exports.countOccurrences = function(arr) {
  return arr.reduce(function(acc, item) {
    if (!acc[item]) {
      acc[item] = 0;
    }
    acc[item] = acc[item] + 1;
    return acc;
  }, {});
}