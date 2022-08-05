function Modify(num1) {
    let NumArr = String(num1).split('');
    let sum = 0;
    let average = 0;
    for (let digit of NumArr) {
        let digitNum = Number(digit);
        sum += digitNum;
    }
    average = sum / NumArr.length;
    if (average > 5) {
        
    }else{
        while(average <= 5){
            let sum1 = 0;
            NumArr.push('9');
            for (let digit of NumArr) {
                let digitNum = Number(digit);
                sum1 += digitNum;
            }
            average = sum1 / NumArr.length;
    
        }
    }
    console.log(NumArr.join(''));
}
Modify(101);
Modify(5835)