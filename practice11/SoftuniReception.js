function reception(input) {
    let e1 = Number(input[0]);
    let e2 = Number(input[1]);
    let e3 = Number(input[2]);
    let students = Number(input[3]);
    let time = 0;
    let efficiency = e1 + e2 + e3;

    while(students >  0){
        time++;
        if (time % 4 !== 0) {    
            students -= efficiency;
        }
    }
    console.log(`Time needed: ${time}h.`);
}
reception(['5','6','4','20']);
reception(['1','2','3','45']);