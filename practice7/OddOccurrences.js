function solve(input) {
    let words = input.split(' ');
    let result = {};
    for (let word of words) {
        word = word.toLocaleLowerCase();
        if (result.hasOwnProperty(word)) {
            result[word]++;
        } else{
            result[word] = 1;
        }
    }

    let filtered = Object.entries(result).filter(([w, count]) => {
        if (count % 2 == 1) {
            return true
        } else{
            return false
        }
    });
    console.log(filtered.map(entry => entry[0]).join(' '));

}