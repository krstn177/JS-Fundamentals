function nxn(n) {
    let arr = [];
    for (let index = 0; index < n; index++) {
        for (let index = 0; index < n; index++) {
            arr.push(n);
            
        }
        console.log(arr.join(' '));
        arr = [];
    }
}
nxn(7);