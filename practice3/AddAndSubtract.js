function addAndSubtract(arr) {
    let result = [];
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result[i] = arr[i] + i;
        } else {
            result[i] = arr[i] - i;
        }
    }
    for (let iterator1 of arr) {
        sum1 += iterator1;
    }
    for (let iterator2 of result) {
        sum2 += iterator2;
    }
    console.log(result);
    console.log(sum1);
    console.log(sum2);   
}
addAndSubtract([5, 15, 23, 56, 35]);