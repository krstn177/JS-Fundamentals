function factorial(num1, num2){
    let factorial1 = 0;
    let factorial2 = 0;
    function factorialCalculate(num1) {
        let factorial = 1;
        for (let index = num1; index >=1 ; index--) {
            factorial *= index;
            
        }
        return factorial;
    }
    factorial1 = factorialCalculate(num1);
    factorial2 = factorialCalculate(num2);
    console.log((factorial1/factorial2).toFixed(2));
}
factorial(6, 2);