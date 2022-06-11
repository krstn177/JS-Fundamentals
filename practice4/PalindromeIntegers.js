function palindromeNums(input) {
  let inputArr = input;
  function IsPalindrome(number) {
    let startNum = number;
    let reversedNum = Number(number.toString().split('').reverse().join(""));
    if (startNum === reversedNum) {
      return true;
    } else {
      return false;
    }
  }
  for (let index = 0; index < input.length; index++) {
    console.log(IsPalindrome(input[index]));
  }
}
palindromeNums([123, 323, 421, 121]);
