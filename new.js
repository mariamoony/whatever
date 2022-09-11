function reverseArray(array) {
    newArray = [];
    arrayLength = array.length
    for (i = 0; i < arrayLength; i++) {
        newArray.push(array.pop());
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    arrayLength = array.length;
    for (i = 1; i < arrayLength * 2 - 1; i += 2) {
        array.unshift(array[i]);
    }
    return array = array.slice(0, arrayLength);
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArrayInPlace([1, 2, 3, 4]));