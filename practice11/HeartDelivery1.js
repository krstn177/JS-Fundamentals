function HeartDelivery(input) {
    let houses = input.shift().split('@').map(Number);
    let command = input.shift();
    let cupidPosition = 0;
    while (command !== 'Love!') {
        let tokens = command.split(' ');
        let jump = Number(tokens[1]);
        cupidPosition += jump;
        if (cupidPosition >= houses.length) {
            cupidPosition = 0;
        }
        if (houses[cupidPosition] <= 0) {
            console.log(`Place ${cupidPosition} already had Valentine's day.`);   
        } else{
            houses[cupidPosition] -= 2;
            if (houses[cupidPosition] <= 0) {
                console.log(`Place ${cupidPosition} has Valentine's day.`);
            }
        }
        command = input.shift();
    }
    console.log(`Cupid's last position was ${cupidPosition}.`);
    let placesFailed = 0;
    for (let house of houses) {
        if (house > 0) {
            placesFailed++;
        }
    }
    if(placesFailed == 0){
        console.log('Mission was successful.');
    } else{
        console.log(`Cupid has failed ${placesFailed} places.`);
    }
}
HeartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"]);
HeartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]);

