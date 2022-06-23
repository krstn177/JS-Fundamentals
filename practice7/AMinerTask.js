function solve(input) {
    let cart = {};
    for (let index = 0; index < input.length; index++) {
        if (index % 2 == 0) {
            if (!cart.hasOwnProperty(input[index])) {
                cart[input[index]] = Number(input[index + 1]);
            } else{
                cart[input[index]] += Number(input[index + 1]);
            }
        }
    }
    let ores = Object.keys(cart)
    for (let ore of ores) {
        console.log(`${ore} -> ${cart[ore]}`);
    }
}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]);
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);