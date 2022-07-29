function binary(input) {
    let arr = String(input).split('').reverse();
    let number = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == 1) {
            number +=  Math.pow(2, index);
        }       
    }
    console.log(number);
}
binary('00001001');