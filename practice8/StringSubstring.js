function solve(searchedWord, sentence) {
    let words = sentence.split(' ');
    words = words.map((a) => a.toLowerCase());
    for (let word of words) {
        if (searchedWord === word) {
            console.log(searchedWord);
            return;
        }
    }
    console.log(`${searchedWord} not found!`);
}
solve('javascript',
'JavaScript is the best programming language'
)
solve('python',
'JavaScript is the best programming language'
)