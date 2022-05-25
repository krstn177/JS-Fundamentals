function vacation(count, type, day){
    let studentsFridayPrice = 8.45;
    let businessFridayPrice = 10.90;
    let regularFridayPrice = 15;
    let studentsSaturdayPrice = 9.8;
    let businessSaturdayPrice = 15.6;
    let regularSaturdayPrice = 20;
    let studentsSundayPrice = 10.46;
    let businessSundayPrice = 16;
    let regularSundayPrice = 22.5;

    let studentsDiscountPercentage = 15;
    let businessDiscountCount = 10;
    let regularDiscountPercentage = 5;

    let totalPrice = 0;

    if(type == 'Businesss' || count >= 100){
        count -= businessDiscountCount;
    }

    if(type == 'Students' && day == 'Friday'){
        totalPrice += count * studentsFridayPrice;
    } else if (type == 'Students' && day == 'Saturday'){
        totalPrice += count * studentsSaturdayPrice;
    } else if (type == 'Students' && day == 'Sunday'){
        totalPrice += count* studentsSundayPrice;
    } else if (type == 'Regular' && day == 'Friday'){
        totalPrice += count * regularFridayPrice;
    } else if (type == 'Regular' && day == 'Saturday'){
        totalPrice += count * regularSaturdayPrice;
    } else if (type == 'Regular' && day == 'Sunday'){
        totalPrice += count * regularSundayPrice;
    } else if (type == 'Business' && day == 'Friday'){
        totalPrice += count * businessFridayPrice;
    } else if (type == 'Business' && day == 'Saturday'){
        totalPrice += count * businessSaturdayPrice;
    } else if (type == 'Business' && day == 'Sunday'){
        totalPrice += count * businessSundayPrice;
    }

    if(type == 'Students' && count >= 30){
        totalPrice -= (studentsDiscountPercentage/100) * totalPrice;
    } else if(type == 'Regular' && count >= 10 && count <= 20){
        totalPrice -= (regularDiscountPercentage / 100) * totalPrice;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    


}