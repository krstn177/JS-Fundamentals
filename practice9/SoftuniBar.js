function solve(input) {
    let totalIn = 0;
    for (const line of input) {
        let regex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d*)\|[^|$%.]*?(?<price>[\d]+[.]?[\d]+)\$/gm
        let result = regex.exec(line);
        if (result){
            let totalPrice = Number(result.groups.quantity) * Number(result.groups.price);
            console.log(`${result.groups.customer}: ${result.groups.product} - ${totalPrice.toFixed(2)}`);
            totalIn += totalPrice;
        } else if (line === 'end of shift'){
            console.log(`Total income: ${totalIn.toFixed(2)}`);
        }
        
    }
}
solve(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
)