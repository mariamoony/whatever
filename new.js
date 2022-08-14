countChars = function(string, char) {
    counter = 0;
    for (a = string.length; a > 0; a--) {
        inspectedChar = string.charAt(a - 1);
        if (inspectedChar == char.toUpperCase() || inspectedChar == char.toLowerCase()){
            counter++;
        }
    }
    return counter;
}

console.log(countChars('beekeeper', 'E'));
