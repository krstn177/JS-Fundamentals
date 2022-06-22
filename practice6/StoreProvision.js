function solve(availableStock, deliveredStock) {
    let storedProducts = {};
    for (let i = 0; i < availableStock.length; i+= 2) {
        let currProduct = availableStock[i];
        storedProducts[currProduct] = Number(availableStock[i + 1]);
        
    }
    for (let i = 0; i < deliveredStock.length; i+=2) {
        let currProduct = deliveredStock[i];
        if (!storedProducts.hasOwnProperty(currProduct)) {
            storedProducts[currProduct] = 0;
        }
        storedProducts[currProduct] += Number(deliveredStock[i + 1]);
    }
    for (const product in storedProducts) {
        console.log(`${product} -> ${storedProducts[product]}`);
    }

}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);