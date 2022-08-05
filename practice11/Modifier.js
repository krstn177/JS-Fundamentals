function modify(input) {
  let arr = input.shift().split(" ").map(Number);

  while (input[0] !== "end") {
      let tokens = input.shift().split(" ");
      let cmd = tokens[0];
    switch (cmd) {
      case "swap":
        let swapVar = arr[tokens[1]];
        arr[tokens[1]] = arr[tokens[2]];
        arr[tokens[2]] = swapVar;
        break;
      case "multiply":
        arr[tokens[1]] *= arr[tokens[2]];
        break;
      case "decrease":
        for (let index = 0; index < arr.length; index++) {
            arr[index]--;
        }
        break;

      default:
        break;
    }
  }
  console.log(arr.join(', '));
}
modify([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
