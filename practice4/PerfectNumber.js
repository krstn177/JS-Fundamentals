function perfect(n) {
    let sum = 0;
    let divisors = [];
    for (let index = 1; index <= n; index++) {
        if (n % index == 0) {
            divisors.push(index);
        }
    }
    for (let iterator of divisors) {
        sum += iterator;
    }
    if (sum / 2 == n) {
        console.log("We have a perfect number!");
    } else{
        console.log("It's not so perfect.");
    }
    
}
perfect(6);
perfect(27);