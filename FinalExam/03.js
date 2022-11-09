function solve(input) {
  let guests = {};
  let currCommand = input.shift();
  let countOfDislikes = 0;
  while (currCommand !== "Stop") {
    let [command, guest, meal] = currCommand.split("-");
    if (command == "Like") {
      if (!guests.hasOwnProperty(guest)) {
        guests[guest] = {};
        guests[guest][meal] = meal;
      } else {
        if (!guests[guest].hasOwnProperty(meal)) {
          guests[guest][meal] = meal;
        }
      }
    } else if (command == "Dislike") {
      if (!guests.hasOwnProperty(guest)) {
        console.log(`${guest} is not at the party.`);
      } else {
        if (guests[guest].hasOwnProperty(meal)) {
          delete guests[guest][meal];
          console.log(`${guest} doesn't like the ${meal}.`);
          countOfDislikes++;
        } else {
          console.log(
            `${guest} doesn't have the ${meal} in his/her collection.`
          );
        }
      }
    }
    currCommand = input.shift();
  }
  for (let guest of Object.keys(guests)) {
    console.log(`${guest}: ${Object.keys(guests[guest]).join(", ")}`);
  }
  console.log(`Unliked meals: ${countOfDislikes}`);
}
solve([
  "Like-Krisi-shrimps",
  "Like-Krisi-soup",
  "Like-Penelope-dessert",
  "Like-Misho-salad",
  "Stop",
]);
solve([
  "Like-Krisi-shrimps",
  "Dislike-Vili-carp",
  "Dislike-Krisi-salad",
  "Stop",
]);
