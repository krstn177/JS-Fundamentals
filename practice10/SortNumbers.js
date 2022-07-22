function sort(num1, num2, num3) {
  let input = [num1, num2, num3];
  let result = [];
  result = input.sort().reverse();

  for (let index = 0; index < result.length; index++) {
      console.log(result[index]);      
  }
}
sort(3,1,2)
