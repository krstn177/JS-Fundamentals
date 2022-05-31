function SpicesMustFlow(startingYield){
    let spicesExtracted = 0;
    let daysCounter = 0;

    while(startingYield >= 100){
        daysCounter++;
        spicesExtracted += startingYield - 26;
        startingYield -= 10;
    }

    console.log(daysCounter);
    if(daysCounter != 0) {
        console.log(spicesExtracted - 26);
    } else {
        console.log(spicesExtracted);
    }
}