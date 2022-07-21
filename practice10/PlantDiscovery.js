function solve(input) {
  let n = +input.shift();
  let plants = {};
  for (let i = 0; i < n; i++) {
    let tokens = input.shift().split("<->");
    let plantName = tokens[0];
    let rarityValue = Number(tokens[1]);
    if (!plants.hasOwnProperty(plantName)) {
      plants[plantName] = {
        rarity: rarityValue,
        rating: [],
      };
    } else {
      plants[plantName].rarity = rarityValue;
    }
  }
  let currentCommand = input.shift();
  while (currentCommand !== "Exhibition") {
    let tokens = currentCommand.split(": ");
    let command = tokens.shift();
    if (command == "Rate") {
      let tokens1 = tokens.shift().split(" - ");
      let plantName = tokens1[0];
      if (plants.hasOwnProperty(plantName)) {
        let ratingValue = Number(tokens1[1]);
        plants[plantName].rating.push(ratingValue);
      } else {
        console.log('error');
      }
    } else if (command == "Update") {
      let tokens1 = tokens.shift().split(" - ");
      let plantName = tokens1[0];
      if (plants.hasOwnProperty(plantName)) {
        let rarityValue = Number(tokens1[1]);
        plants[plantName].rarity = rarityValue;  
      } else {
        console.log('error');
      }
    } else if (command == "Reset") {
      let plantName = tokens.shift();
      if (plants.hasOwnProperty(plantName)) {
        plants[plantName].rating = [];
      } else {
        console.log('error');
      }
    }
    currentCommand = input.shift();
  }
  console.log("Plants for the exhibition:");
  for (let plant of Object.keys(plants)) {
    let averageRating = 0;
    if (plants[plant].rating.length !== 0) {
      for (let rating of plants[plant].rating) {
        averageRating += rating;
      }
      averageRating = averageRating / plants[plant].rating.length;
    }
    console.log(
      `- ${plant}; Rarity: ${
        plants[plant].rarity
      }; Rating: ${averageRating.toFixed(2)}`
    );
  }
}
solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
solve([
  "3",
  "Candelabra<->10",
  "Oahu<->10",
  "Oahu<->8",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
