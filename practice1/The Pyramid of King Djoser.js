function pyramid(size, increase){
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let steps = 1;

    while(size >= 1){
        if(size > 2){
            if(steps % 5 == 0){
                lapisLazuli += size * 4 - 4 * increase;
            } else{
                marble += size * 4 - 4 *increase;
            }
            steps++;
        
            stone += Math.pow(size - 2, 2) * increase;
        } else {
            gold += Math.pow(size, 2) * increase;
        }

        size -= 2;
        
    }
    console.log(`Stone required: ${Math.ceil(stone
        )}\nMarble required: ${Math.ceil(marble)}\nLapis Lazuli required: ${Math.ceil(lapisLazuli
            )}\nGold required: ${gold}\nFinal pyramid height: ${Math.floor(steps)}`);
}

