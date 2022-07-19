function solve(input) {
    let numberOfCars = input.shift();
    let cars = {};
    for (let i = 0; i < numberOfCars; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        cars[car] = [Number(mileage), Number(fuel)];
    }
    let currComand = input.shift();
    while(currComand !== 'Stop'){
        let [command, car, p1, p2] = currComand.split(' : ');
        if (command == "Drive") {
            if (Number(p2) > cars[car][1]) {
                console.log("Not enough fuel to make that ride");
            } else{
                cars[car][1] -= Number(p2);
                cars[car][0] += Number(p1);
                console.log(`${car} driven for ${p1} kilometers. ${p2} liters of fuel consumed.`);
                if (cars[car][0] >= 100000) {
                    delete cars[car];
                    console.log(`Time to sell the ${car}!`);
                }
            }
        } else if(command == 'Refuel'){
            cars[car][1] += Number(p1);
            let leftover = 0
            if(cars[car][1] > 75){
                leftover = cars[car][1] - 75;
                cars[car][1] = 75;
            }
            console.log(`${car} refueled with ${p1 - leftover} liters`);
        
        } else if(command == 'Revert'){
            cars[car][0] -= Number(p1);
            if (cars[car][0] < 10000) {
                cars[car][0] = 10000;
            } else{
                console.log(`${car} mileage decreased by ${p1} kilometers`);
            }
        }
        currComand = input.shift();
    }
    for (let car of Object.keys(cars)) {
        console.log(`${car} -> Mileage: ${cars[car][0]} kms, Fuel in the tank: ${cars[car][1]} lt.`);
    }

}
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])