function solve(input) {
    let string = input.shift();

    let currentCommand = input.shift();
    while (currentCommand !== "Abracadabra") {
        let [command, p1, p2] = currentCommand.split(' ');
        if (command === "Abjuration") {
            tempMessage = string.toUpperCase();
            string = tempMessage;
            console.log(string);
        } else if (command === "Necromancy"){
            tempMessage = string.toLowerCase();
            string = tempMessage;
            console.log(string);
        } else if (command === "Illusion"){
            let index = +p1
            string = string.split('');
            if (index >= 0 && index < string.length) {
                string[index] = p2;
                console.log('Done!');
            } else {
                console.log('The spell was too weak.');
            }
            string = string.join('');
            
        }else if (command === "Divination"){
            let firstString = p1;
            let secondString = p2;
            if (string.includes(firstString)) {
                string = string.split(firstString).join(secondString);
                console.log(string);
            }
            
        }else if (command === "Alteration"){
            let substring = p1;
            if (string.includes(substring)) {
                let left = string.slice(0, string.indexOf(substring))
                let right = string.slice(string.indexOf(substring)+ substring.length)
                string = left + right;
                console.log(string);
            }
            
        } else{
            console.log("The spell did not work!");
        }
        currentCommand = input.shift();
    }
}
solve((["A7ci0",
"Illusion 1 c",
"Illusion 4 o",
"Abjuration",
"Abracadabra"])
);
solve((["TR1GG3R",
"Necromancy",
"Illusion 8 m",
"Illusion 9 n",
"Abracadabra"])
)
solve(["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Alteration master",
"Abracadabra"])
