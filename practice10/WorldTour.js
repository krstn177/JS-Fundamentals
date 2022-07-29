function solve(input) {
  let text = input.shift();
  let currCommand = input.shift();
  while (currCommand !== "Travel") {
    let tokens = currCommand.split(":");
    let command = tokens.shift();
    if (command === "Add Stop") {
      let index = Number(tokens.shift());
      let string = tokens.shift();
      if (index >= 0 && index < text.length) {
        let left = text.slice(0, index);
        let right = text.slice(index);
        text = left + string + right;
      }
    } else if (command === "Remove Stop") {
      let startIndex = Number(tokens.shift());
      let endIndex = Number(tokens.shift());
      if (
        startIndex >= 0 &&
        startIndex < text.length &&
        endIndex >= 0 &&
        endIndex < text.length
      ) {
        let left = text.slice(0, startIndex);
        let right = text.slice(endIndex + 1);
        text = left + right;
      }
    } else if (command === "Switch") {
      let oldString = tokens.shift();
      let newString = tokens.shift();
      if (text.indexOf(oldString) > -1) {
        text = text.split(oldString).join(newString);
      }
    }
    console.log(text);
    currCommand = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${text}`);
}
solve([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
