function reduceArrays(array) {
  return array.reduce(
    function f(current, next) {
      newCurrent = current.concat(next);
      return newCurrent;
    }
  )
}

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(reduceArrays(arrays));