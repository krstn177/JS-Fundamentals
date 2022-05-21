/*function login(array){
    let userName = array.shift();
    let copy = userName;
    array.unshift(copy);
    let counter = 0;
    for(let i = 1; i < array.length; i++){
        if(counter === 3){
            console.log(`User ${userName} blocked`)
            break;
        }
        let reverseString = array[i];     
        reverseString = reverseString.split('');  
        reverseString.reverse();
        reverseString = reverseString.join('')
        if(reverseString !== userName ){
            console.log('Incorrect password. Try again.');

        } else{
            console.log(`User ${userName} logged in.`)
        }
        counter++
    }
}
*/
//login(['Acer','login', 'go','let me in','recA'])

function login(array){
    for(let i = 1; i < array.length; i++){
        if(array[0].split("").reverse().join('') === array[i]){
            console.log(`User ${array[0]} logged in.`)
        } else {
            if(i === array.length - 1) {
                console.log(`User ${array[0]} blocked!`);
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])
login(['Acer','login', 'go','let me in','recA'])
