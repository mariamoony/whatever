function printFarmInventory(cows, chickens, pigs){
    function getNumberLength(cows, chickens, pigs){
        numberLength = Math.max(String(cows).length, String(chickens).length, String(pigs).length);
        return(numberLength);
    }

    function formatNumber(length) {
        return function saveNumber(number) {
            var string = String(number);
            while (string.length < length)
                string = "0" + string;
            return string;
        }

    }

    function printAnimal(number, animal) {
        console.log(number + ' ' + animal);
    }

    numberLength = getNumberLength(cows, chickens, pigs);
    numberFormat = formatNumber(numberLength);

    printAnimal(numberFormat(cows), 'cows');
    printAnimal(numberFormat(chickens), 'chickens');
    printAnimal(numberFormat(pigs), 'pigs');

}
printFarmInventory(100, 10000, 15);