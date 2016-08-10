function SortedMap() {
  // this will keep a record of ALL insertions, even duplicates
  this.insertions = [];
  // this will be our key value store, values can be computed
  this.map = {};
}

SortedMap.prototype.insert = function(key, functionOrValue) {
  this.insertions.push(key);
  if (typeof functionOrValue === 'function') {
    this.map[key] = functionOrValue.call(this, this.map[key]);
  } else {
    this.map[key] = functionOrValue;
  }
}

/**
  * USE CASES
  *
  * @function firstNonRepeatingLetter
  * @desc Returns a letter from a string that is the first non-repeating letter
  * @param  {String} str 
  * @return {String/null}     returns null if all letters are repeating
  var firstNonRepeatingLetter = function(str) {
    var str = str.split('');
    var sortedMap = new SortedMap();
    str.forEach(function(letter){
      sortedMap.insert(letter, function(count){
        // handle non existent keys
        if (count === undefined) {
          count = 0;
        }
        // increment the count
        return count + 1;
      })
    });
    for (var i = 0; i < sortedMap.insertions.length; i++) {
      if (sortedMap.map[sortedMap.insertions[i]] === 1) {
        return sortedMap.insertions[i];
        break;
      }
    }
    return null;
  }
 */
