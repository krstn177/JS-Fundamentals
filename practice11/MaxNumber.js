function maxNumber(num1, num2, num3) {
    let max = 0;
    let arr = [num1, num2, num3]
    for (let index = 0; index < 3; index++) {
        if (arr[index] >= max) {
            max = arr[index];
        }    
    }
    console.log(max);
}
function maxNumber1(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    } else if (num3 > num1 && num3 > num2) {
        console.log(num3);
    }
}
maxNumber(-2, 7, 3);
maxNumber1(-2, 7, 3);