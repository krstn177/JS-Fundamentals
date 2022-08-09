function validation(arr) {
    let x1 = arr.shift();
    let y1 = arr.shift();
    let x2 = arr.shift();
    let y2 = arr.shift();

    function IsValid(x1, y1, x2, y2) {
        let result = false;
        let validationFormula = Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));
        if (Number.isInteger(validationFormula)) {
            result = true;
        }
        if (result) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
        } else{
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`
        }
    }
    console.log(IsValid(x1, y1, 0, 0));
    console.log(IsValid(x2, y2, 0, 0));
    console.log(IsValid(x1, y1, x2, y2));
}
validation([3, 0, 0, 4])