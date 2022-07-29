function CarWash(input) {
  let value = 0;
  for (let iterator of input) {
    switch (iterator) {
      case "soap":
          value += 10;
        break;
      case "water":
          value += 0.2*value;
        break;
      case "vacuum cleaner":
          value += 0.25*value;
        break;
      case "mud":
          value -= 0.1*value;
        break;
      default:
        break;
    }
  }
  console.log(`The car is ${value.toFixed(2)}% clean.`);
}
CarWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
CarWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
