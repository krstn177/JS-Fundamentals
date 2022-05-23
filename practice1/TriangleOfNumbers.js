function triangle(num){
    
    for(let i = 1; i <= num; i++){
        let sequence = ' ';
        for(let j = 1; j <= i; j++){
            sequence += i + ' ';
            
        }
        console.log(sequence.trim());
    }
}

triangle(10)

