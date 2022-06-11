function OddAndEvenSum(num) {
    let stringNum = String(num);
    let arr = stringNum.split('');
    let sumEven = 0;
    let sumOdd = 0;
    for (let iterator of arr) {
        if (Number(iterator) % 2 == 0) {
            sumEven += Number(iterator);
        } else{
            sumOdd += Number(iterator);
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
    
}
OddAndEvenSum(1000435);
OddAndEvenSum(3495892137259234);