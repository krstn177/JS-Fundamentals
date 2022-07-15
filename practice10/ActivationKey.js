function solve(input) {
    let rawKey = input.shift();

    let currCommand = input.shift();
    while (currCommand !== "Generate") {
        let [command, p1, p2, p3] = currCommand.split(">>>");
        if (command === "Contains") {
            if (rawKey.indexOf(p1) !== -1) {
                console.log(`${rawKey} contains ${p1}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (command === "Flip"){
            if (p1 == 'Upper') {
                let left = rawKey.slice(0, Number(p2));
                let changes = rawKey.slice(Number(p2), Number(p3));
                let right = rawKey.slice(Number(p3));
                changes = changes.toUpperCase();
                rawKey = left + changes + right;
                console.log(rawKey);
            } else if (p1 === 'Lower') {
                let left = rawKey.slice(Number(0), Number(p2));
                let changes = rawKey.slice(Number(p2), Number(p3));
                let right = rawKey.slice(Number(p3));
                changes = changes.toLowerCase();
                rawKey = left + changes + right;
                console.log(rawKey);
            }
        } else if (command === "Slice"){
            let left = rawKey.slice(Number(0), Number(p1));
            let right = rawKey.slice(Number(p2));
            rawKey = left + right;
            console.log(rawKey);
        }
        currCommand = input.shift();
    }
    console.log(`Your activation key is: ${rawKey}`);
}
solve(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
