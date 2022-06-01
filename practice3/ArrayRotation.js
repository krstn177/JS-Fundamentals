function rotate(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let currNum = array.shift();
        array.push(currNum);
    }
    console.log(array.join(' '));
}
rotate([51, 47, 32, 61, 21], 2)