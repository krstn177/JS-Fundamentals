function solve(input) {
    let n = input.shift();
    let pattern = /^([\$|%])([A-Z][a-z]{2,})\1:+\s+\[(\d+.?\d+?)\]\|+\[(\d+.?\d+?)\]\|+\[(\d+.?\d+?)\]\|+$/gm
    for (let i = 0; i < n; i++) {
        let text = input.shift();
        let match = pattern.exec(text);
        
        if (match !== null) {
            let message = [];
            if (String.fromCharCode(match[3]) !== '') {
                message.push(String.fromCharCode(match[3]));    
            }
            if (String.fromCharCode(match[3]) !== '') {
                message.push(String.fromCharCode(match[4]));    
            }
            if (String.fromCharCode(match[3]) !== '') {
                message.push(String.fromCharCode(match[5]));    
            }
            
            message = message.join('');
            console.log(`${match[2]}: ${message}`);
        } else {
            console.log("Valid message not found!");
        }
        
    }
    
}
solve((["4",
"$Request$: [73]|[115]|[105]|",
"%Taggy$: [73]|[73]|[73]|",
"%Taggy%: [118]|[97]|[108]|",
"$Request$: [73]|[115]|[105]|[32]|[75]|"]))
solve((["3",
"This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
"$tAGged$: [97][97][97]|",
"$Request$: [73]|[115]|[105]|true"])
)