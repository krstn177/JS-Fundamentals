function solve(input) {
    let companies = {};
    for (let line of input) {
        let tokens = line.split(' -> ');
        if (!companies.hasOwnProperty(tokens[0])) {
            companies[tokens[0]] = [];
            companies[tokens[0]].push(tokens[1]);
        } else{
            if (!companies[tokens[0]].includes(tokens[1])) {
                companies[tokens[0]].push(tokens[1]);
            }
        }
    }
    let companiesSorted = Object.keys(companies).sort((a,b) => a.localeCompare(b));
    for (let company of companiesSorted) {
        console.log(company);
        for (let person of companies[company]) {
            console.log(`-- ${person}`);
        }
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);