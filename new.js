function printFarmInventory(cows, chickens, pigs){
    function getNumberLength(cows, chickens, pigs){
        numberLength = Math.max(cows.length, chickens.length, pigs.length);
        return(numberLength);
    }

    function formatNumber(number, length){
        var string = String(number);
        while (string.length < length)
            string = "0" + string;
    }

    function printAnimal(number, animal) {
        console.log(number + ' ' + animal);
    }

    numberLength = getNumberLength(cows, chickens, pigs);
   
    printAnimal(formatNumber (cows, numberLength), 'cows');
    printAnimal(formatNumber (chickens, numberLength), 'chickens');
    printAnimal(formatNumber (pigs, numberLength), 'pigs')
}
printFarmInventory(100, 10000, 15);