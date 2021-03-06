function solve(input) {
    let pattern = /(=|\/)(?<name>[A-Z][A-Za-z]{2,})\1/g
    let match = pattern.exec(input);
    let destinations = [];
    let travelPoints = 0;
    while (match!==null) {
        let destination = match[2];
        let points = destination.length;
        travelPoints += points;
        destinations.push(`${destination}`);
        match = pattern.exec(input);
    }
    
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
solve("ThisIs some InvalidInput");