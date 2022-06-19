function solve(input) {
    let dictionary = {};
    for (const item of input) {
        let parsed = JSON.parse(item);
        dictionary = Object.assign(dictionary, parsed);
    }
    let sortedKeys = Object.keys(dictionary).sort((a,b) => a.localeCompare(b));
    for (const item of sortedKeys) {
        console.log(`Term: ${item} => Definition: ${dictionary[item]}`);
    }
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);