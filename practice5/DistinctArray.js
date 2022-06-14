function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                arr.splice(j,1);
                j = j - 1;
            }
        }
    }
    console.log(arr.join(' '));
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);