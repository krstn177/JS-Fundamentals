function towns(input) {
    let finalResult = {};
    for (let tokens of input) {
        let info = tokens.split(' | ');
        finalResult.town = info.shift();
        finalResult.latitude = Number(info.shift()).toFixed(2);
        finalResult.longitude = Number(info.shift()).toFixed(2);
        console.log(finalResult);
    }
}

towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])