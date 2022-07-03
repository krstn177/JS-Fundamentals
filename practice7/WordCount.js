function solve(input){
    let result = {};
    let words = input.shift().split(' ');

    for (const word of words) {
        result[word] = 0;
    }

    for (const word of input) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }
    let sorted = Object.entries(result);

    sorted.sort((a,b) => b[1] - a[1]);
    for (const word of sorted) {
        console.log(word[0],'-', word[1]);
    }
}
solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )