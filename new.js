function some(array, test) {
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) return true;
  }
  return false;
}

function every(array, test) {
  for (var i = 0; i < array.length; i++) {
    if (!(test(array[i]))) return false;
  }
  return true;
} 