function solve(input) {
    let string = input[0];
    let cases = input[1];
    let sum = 0;
    if (cases === 'LOWERCASE') {
        for (let letter of string) {
            
            console.log(letter.toLowerCase());
            console.log(letter.toLowerCase().charCodeAt(0));
            sum += letter.toLowerCase().charCodeAt(0);
        }
        
    } else if(cases === 'UPPERCASE'){
        for (let letter of string) {
            console.log(letter.toUpperCase());
            sum += letter.toUpperCase().charCodeAt(0);
        }
    }
    console.log(sum);

}
solve(['HelloFromMyAwesomePROGRAM',
'LOWERCASE']
)