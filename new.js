function deepEqual(smth1, smth2) {
    if (smth1 == null || smth2 == null) 
        return smth1 === smth2;
    if (typeof smth1 == 'object' && typeof smth2 == 'object') {
        for (prop in smth1) {
            if (!deepEqual(smth1[prop], smth2[prop]))
                return false;
        }
        return true;
    }
    return smth1 === smth2;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));