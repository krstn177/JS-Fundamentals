function solve(input) {
    let regex = /(?<!\S)[a-zA-z]+([\.\-\_]*[A-Za-z]+)*@[a-zA-Z]+([\.\-]*[A-Za-z]+)*(\.[A-Za-z]+)/g;
    let result = input.match(regex);
    for (const line of result) {
        console.log(line);
    }
}
solve('Please contact us at: support@github.com.')