function search(array, input) {
    let numberToTakeFromArr = input[0];
    let deleteNumbersFromArr = input[1];
    let searchedNumber = input[2];

    let myNewArr = array.splice(0, numberToTakeFromArr);
    myNewArr = myNewArr.splice(deleteNumbersFromArr);
    let count = 0;
    for (let index = 0; index < myNewArr.length; index++) {
        if (myNewArr[index] == searchedNumber) {
            count++;
        }
        
    }
    console.log(`Number ${searchedNumber} occurs ${count} times.`);
}