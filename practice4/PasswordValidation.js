function validate(password) {
  function IsLengthEnough(password) {
    return password.length >= 6 && password.length <= 10;
  }
  function IsOnlyLettersAndDigits(password) {
    let passwordArr = password.split("");
    for (let iterator of passwordArr) {
      let curChar = iterator.charCodeAt(0);
      if (
          !(curChar >= 48 && curChar <= 57) &&
         !(curChar >= 65 && curChar <= 90) &&
         !(curChar >= 97 && curChar <= 122) 
      ) {
        return false;
      }  
      
    }
    return true;
  }
  function IsHavingAtleastTwoDigits(password) {
    let count = 0;
    for (let charIndex of password) {
      let currChar = charIndex.charCodeAt(0);
      if (currChar >= 48 && currChar <= 57) {
        count++;
      }
    }
    return count >= 2 ? true : false;
  }
  let isLengthValid = IsLengthEnough(password);
  let isLetterAndDigitsOnly = IsOnlyLettersAndDigits(password);
  let isContainingAtLeastTwoDigits = IsHavingAtleastTwoDigits(password);
  if (isLengthValid && isLetterAndDigitsOnly && isContainingAtLeastTwoDigits) {
    console.log("Password is valid");
  }
  if (!isLengthValid) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!isLetterAndDigitsOnly) {
    console.log("Password must consist only of letters and digits");
  }
  if (!isContainingAtLeastTwoDigits) {
    console.log("Password must have at least 2 digits");
  }
}
validate("Pa$s$s");
