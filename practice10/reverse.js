function rev(string1){
    let result = string1.split('').reverse();
    let res1 = '';
    for (let index = 0; index < result.length; index++) {
        res1 += result[index];
        
    }
    console.log(res1);
}
rev('Kristiyan')