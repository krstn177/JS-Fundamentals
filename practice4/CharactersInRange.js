function charactersInRange(char1, char2) {
    let result = []
    let index1 = char1.charCodeAt(0)
    let index2 = char2.charCodeAt(0)
    if (char1 > char2) {
        for (let index = index2 + 1; index < index1; index++) {
            result.push(String.fromCharCode(index));
            
        }
    } else{
        for (let index = index1 + 1; index < index2; index++) {
            result.push(String.fromCharCode(index));
            
        }
    }
    console.log(result.join(' '));
}
charactersInRange('a', 'd')