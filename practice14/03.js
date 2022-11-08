function solve(input) {
    let linesOfInput = input.shift();
    let targets = {};

    while(linesOfInput !== "Sail") {
        let [city, population, gold] = linesOfInput.split('||');

        if (!targets.hasOwnProperty(city)) {
            targets[city] = [Number(population), Number(gold)];
        } else{
            targets[city][0] += Number(population);
            targets[city][1] += Number(gold);
        }

        linesOfInput = input.shift();
    }
    linesOfInput = input.shift();
    while (linesOfInput !== "End") {
        let [command, city, index2, gold] = linesOfInput.split('=>');

        if (command == "Plunder") {
            targets[city][0] -= Number(index2);
            targets[city][1] -= Number(gold);

            if (targets[city][0] <= 0 || targets[city][1] <= 0) {
                if (targets[city][0] < 0) {
                    index2 = Number(index2) + Number(targets[city][0])
                } else if(targets[city][1] < 0){
                    gold = Number(gold) + Number(targets[city][1])
                }
                delete targets[city];
                console.log(`${city} plundered! ${gold} gold stolen, ${index2} citizens killed.`);
                console.log(`${city} has been wiped off the map!`);
            } else{
                console.log(`${city} plundered! ${gold} gold stolen, ${index2} citizens killed.`);
            }
        } else if(command === "Prosper"){
            let amountOfGold = Number(index2);
            if (amountOfGold > 0) {
                targets[city][1] += amountOfGold;
                console.log(`${index2} gold added to the city treasury. ${city} now has ${targets[city][1]} gold.`);
            } else {
                console.log('Gold added cannot be a negative number!');
            }
        }

        linesOfInput = input.shift();
    }
    let citiesToPrint = Object.values(targets).length;
    if (citiesToPrint < 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else{
        console.log(`Ahoy, Captain! There are ${citiesToPrint} wealthy settlements to go to:`);
        Object.entries(targets).forEach((key) =>{
            console.log(`${key[0]} -> Population: ${key[1][0]} citizens, Gold: ${key[1][1]} kg`);
        })
    }
}
solve(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]);
solve(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])

