function MovingTarget(input) {
  let targets = input.shift().split(" ").map(Number);
  let command = input.shift();
  while (command !== "End") {
    let tokens = command.split(" ");
    let cmd = tokens.shift();
    let index = Number(tokens[0]);
    let power = Number(tokens[1]);
    switch (cmd) {
      case "Shoot":
        if (index >= 0 && index < targets.length) {
          targets[index] -= power;
        }
        if (targets[index] <= 0) {
          targets.splice(index, 1);
        }
        break;
      case "Add":
        
        if (index >= 0 && index < targets.length) {
          targets.splice(index, 0, power);
        } else {
          console.log("Invalid placement!");
        }
        break;
      case "Strike":
        if(index - power >= 0 && index + power < targets.length){
            targets.splice(index - power, power * 2 + 1);
        } else {
          console.log("Strike missed!");
        }
        break;

      default:
        break;
    }
    command = input.shift();
  }
  console.log(targets.join("|"));
}
MovingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]);

MovingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"]);

