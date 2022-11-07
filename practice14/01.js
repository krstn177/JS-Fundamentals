function solve(input) {
    let message = input.shift();
    
    let currentLine = input.shift();
    while(currentLine !== "Decode"){
        let tempMessage = '';
        let tokens = currentLine.split("|");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command === 'Move') {
            let index = +p1;
            let lettersToMove = message.substring(0, index);
            tempMessage = message.replace(lettersToMove, "");
            tempMessage += lettersToMove;
            message = tempMessage;
        } else if(command === 'Insert'){
            let index = +p1;
            tempMessage = message.split("");
            tempMessage.splice(index, 0, p2)
            message = tempMessage.join("");
        } else if(command === 'ChangeAll'){   
            while (message.includes(p1)) {
                tempMessage = message.replace(p1, p2);
                message = tempMessage;
                
            }
            message = tempMessage;
        }

        currentLine = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);

}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]
  )