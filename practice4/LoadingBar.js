function loadingBar(percent) {
    let bar = [];
    for (let index = 1; index <= 10; index++) {
        
            bar.push('.');
        
    }
    let perc = percent/10;
    for (let index = 0; index < perc; index++) {
        
            bar[index] = '%';
        
        
    }
    let stringBar = bar.join('');
    if(bar[bar.length-1] == '%'){
        console.log(`${percent}% Complete!`);
        console.log(`[${stringBar}]`);
    } else{
        console.log(`${percent}% [${stringBar}]`);
        console.log('Still loading...');

    }

}
loadingBar(50);
loadingBar(100);
