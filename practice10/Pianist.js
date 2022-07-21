function solve(input) {
    let numberOfPieces = input.shift();
    let pieces = {};
    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = input.shift().split('|');
        pieces[piece] = [composer, key];
        
    }
    let currentCommand = input.shift();
    while (!(currentCommand == 'Stop')) {
        let [command,piece, p2, p3] = currentCommand.split('|');
        if (command === 'Add') {
            if (!pieces.hasOwnProperty(piece)) {
                pieces[piece] = [p2, p3];
                console.log(`${piece} by ${p2} in ${p3} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (command === 'Remove'){
            if (!pieces.hasOwnProperty(piece)){
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else{
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            }
        } else if (command === 'ChangeKey'){
            if (!pieces.hasOwnProperty(piece)){
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else{
                pieces[piece][1] = p2;
                console.log(`Changed the key of ${piece} to ${p2}!`);
            }
        }
        currentCommand = input.shift();
    }
    for (let piece of Object.keys(pieces)) {
        console.log(`${piece} -> Composer: ${pieces[piece][0]}, Key: ${pieces[piece][1]}`);
    }

}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);