function gladiator(fightsLost, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let totalExpenses = 0;
    for (let currentFight = 1; currentFight <= fightsLost; currentFight++) {
        
        if(currentFight % 2 == 0){
            totalExpenses += helmetPrice;
        }
        if(currentFight % 3 == 0){
            totalExpenses += swordPrice;
        }
        if(currentFight % 6 == 0){
            totalExpenses += shieldPrice;
        }
        if(currentFight % 12 == 0){
            totalExpenses += armorPrice;
        }

    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)
}