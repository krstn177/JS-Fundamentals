function solve(word) {
    let unique = '';
    for (let index = 0; index < word.length; index++) {
        let currChar = word.charAt(index);
        let nextChar = word.charAt(index + 1);
        if (currChar !== nextChar) {
            unique += currChar;
        }
    }
    console.log(unique);
}
solve("aaaaabbbbbcdddeeeedssaa");