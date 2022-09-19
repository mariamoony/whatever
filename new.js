function arrayToList(array) {
    list = null;
    for (i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

console.log(arrayToList([10, 20]));

function listToArray(list) {
    array = [];
    if (list.rest != null) {
        listToArray(list.rest);
    }
    array.unshift(list.value);
    return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(newElement, list) {
    return {value: newElement, rest: list};
}

console.log(prepend(10, prepend(20, null)));

function nth (list, index) {
    array = [];
    if (list.rest != null) {
        nth(list.rest);
    }
    array.unshift(list.value);
    return array[index];
}

console.log(nth(arrayToList([10, 20, 30]), 5));
