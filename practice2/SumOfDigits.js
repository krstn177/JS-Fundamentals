function digits(input){
    let sum = 0;
    let numberAsString = input.toString();
    for(let char of numberAsString){
        sum += Number(char);
        
    }
    console.log(sum);
}
digits(512)
