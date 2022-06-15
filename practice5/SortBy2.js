function sortBy2(arr){
    
    let result = [];
    result = arr.sort(function(a,b){
        if (a.length < b.length || a.length > b.length) {
            return a.length - b.length;
        } else{
            return a.localeCompare(b);
        }
    });
    for (const iterator of result) {
        console.log(iterator);
    }
}
sortBy2(['alpha', 'beta', 'gamma']);
sortBy2(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
