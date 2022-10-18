String.prototype.format = function () {
    // store arguments in an array
    var args = arguments;
    // use replace to iterate over the string
    // select the match and check if the related argument is present
    // if yes, replace the match with the argument
    return this.replace(/{([0-9]+)}/g, function (match, index) {
      // check if the argument is present
      return typeof args[index] == 'undefined' ? match : args[index];
    });
};

function politeFunc(f, txt) {
    return function(arg) {
        res = f(arg);
        console.log(txt.format(arg, res));
    }
}

function tempConvertFtoC(valNum) {
    return (valNum-32) / 1.8;
}

politeConvert = politeFunc(tempConvertFtoC, '{0} Fahrenheit = {1} Celsius');
politeConvert(446);