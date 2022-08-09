function IsPrime(number) {
    let result = true;
    for (let index = 2; index < number; index++) {
        if (number % index == 0) {
            result = false;
        }
    }
    console.log(result);
}
IsPrime(7);
IsPrime(8);
IsPrime(81);