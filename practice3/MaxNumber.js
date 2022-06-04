function max(arr) {
    let topInteger = [];
    for (let index = 0; index < arr.length; index++) {
        let currentEl = arr[index];
        let IsTopInteger = true;
        for (let j = index + 1; j < arr.length; j++) {
            let nextEl = arr[j];
            if (currentEl <= nextEl) {
                IsTopInteger = false;
                break;
            }
            
        }
        if (IsTopInteger) {
            topInteger.push(currentEl);
            }
    }
    console.log(topInteger.join(' '))
}
max([1, 4, 3, 2])