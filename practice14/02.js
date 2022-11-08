function solve(input) {
    const NEED_DAILY_CALORIES = 2000;
    let string = input.shift();
    let match = null;
    let pattern = /([#]|[\|])(?<itemName>[A-Za-z\s]+)\1(?<expirationDate>[0-9]{2}[\/][0-9]{2}[\/][0-9]{2})\1(?<calories>[0-9]{1,5})\1/gm
    let totalCalories = 0;
    let provisions = [];

    while ((match = pattern.exec(string))) {
        let item = match.groups['itemName'];
        let expDate = match.groups['expirationDate'];
        let calories = Number(match.groups['calories']);
        totalCalories += calories;
        provisions.push(`Item: ${item}, Best before: ${expDate}, Nutrition: ${calories}`);
    }
    let daysToLast = Math.floor(totalCalories / NEED_DAILY_CALORIES);
    console.log(`You have food to last you for: ${daysToLast} days!`);
    console.log(provisions.join("\n"));
}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);