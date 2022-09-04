function range(first, last, step) {
    arRange = [];
    if (step == undefined) step = 1;
    if (first <= last) {
        for (i = first; i <= last; i += step)
            arRange.push(i);
        return arRange;
    }
    for (i = first; i >= last; i += step)
        arRange.push(i);
    return arRange;

}

console.log(range(5, 2, -2));

function sum(array) {
    result = 0;
    for (i in array) {
        result += array[i];
    }
    return result;
}

console.log(sum(range(5, 2, -1)));