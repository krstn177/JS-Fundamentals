function Magicsum(arr, magicNumber) {
    for (let index = 0; index < arr.length - 1; index++) {
        let currentEl = arr[index];
        for (let j = index + 1; j < arr.length; j++) {
            let nextEl = arr[j];
            let sum = currentEl + nextEl;
            if (sum == magicNumber) {
                console.log(`${currentEl} ${nextEl}`)
            }
        }
        
    }
}
Magicsum([1, 7, 6, 2, 19, 23], 8)
    