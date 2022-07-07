function solve(input) {
    let [firstString, secondString, thirdString] = input;
    let combinedString = firstString.concat(secondString);
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let reversedPassword = "";
    thirdString = thirdString.toLowerCase();

    let vowelIndex = 0;
    for (let index = 0; index < combinedString.length; index++) {
        if (vowels.includes(combinedString[index])) {
            let indexOfChar = vowelIndex % thirdString.length;
            vowelIndex++;
            let currentChar = thirdString.charAt(indexOfChar);
            reversedPassword += currentChar.toUpperCase();
        } else {
            reversedPassword += combinedString[index];
        }
    }
    console.log(`Your generated password is ${reversedPassword.split('').reverse().join('')}`);
}
solve(['ilovepizza', 'ihatevegetables','orange']);
    