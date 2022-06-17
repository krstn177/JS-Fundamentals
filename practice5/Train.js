function Train(train) {
    let passengersInWagons = train.shift().split(' ').map(Number);
    let maxCapacity = Number(train.shift());
    for (let command of train) {
        let curCommand = command.split(' ');
        if (curCommand[0] === "Add") {
            passengersInWagons.push(Number(curCommand[1]));
        } else{
            for (let index = 0; index < passengersInWagons.length; index++) {
                if (passengersInWagons[index] + Number(curCommand[0]) <= maxCapacity) {
                    passengersInWagons[index] += Number(curCommand[0]);
                    break;
                }
                
            }
        }
    }
    console.log(passengersInWagons.join(' '));
}