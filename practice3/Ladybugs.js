function Ladybugs(input) {
    let size = Number(input[0]);
    let indexes = input[1].split(' ');
    let indexes1 = []
    for (let index = 0; index < indexes.length; index++) {
        indexes1[index] = Number(indexes[index]);
        
    }
    let result = [];
    let check1 = false;
    for (let index = 0; index < size; index++) {
        for (let iterator of indexes1) {     
            if (index == iterator) {
                result[index] = 1;
                check1 = true;                
            }
            
        } 
        if (check1 == false) {           
            result[index] = 0;
        }
        check1 = false;
        
    }
    
    for (let i = 2; i < input.length; i++) {
        let command = input[i].split(' ');
        let start = Number(command[0]);
        let direction = command[1];
        let leap = Number(command[2]);
        let destinationRight = start + leap;
        let destinationLeft = start - leap;
        switch (direction) {
            case 'right':
                if (start < 0 || start >= result.length) {
                    break;
                }
                if (result[start] == 0) {
                    break;
                }
                if ((destinationRight) >= result.length) {
                    result[start] = 0;
                    break;
                } else{

                    if (result[destinationRight] != 1) {                                              
                        result[start] = 0;
                        result[destinationRight] = 1;
                    } else{
                        let check = false;
                        while (result[destinationRight] == 1) {
                            destinationRight += leap;
                            if ((destinationRight) >= result.length) {
                                result[start] = 0;
                                check = true;
                                break;
                            } 
                        }
                        if (check == true) {
                            break;
                        }else{                        
                        result[start] = 0;
                        result[destinationRight] = 1;
                        }
                    }
                }               
                break;
            case 'left':
                if (start < 0 || start >= result.length) {
                    break;
                }
                if (result[start] == 0) {
                    break;
                }
                if ((destinationLeft) < 0) {
                    result[start] = 0;
                    break;
                } else{

                    if (result[destinationLeft] != 1) {                                              
                        result[start] = 0;
                        result[destinationLeft] = 1;
                    } else{
                        let check = false;
                        while (result[destinationLeft] == 1) {
                            destinationLeft -= leap;
                            if ((destinationLeft) < 0) {
                                result[start] = 0;
                                check = true;
                                break;
                            } 
                        }
                        if (check == true) {
                            break;
                        }else{                        
                        result[start] = 0;
                        result[destinationLeft] = 1;
                        }
                    }
                }

                
                break;
            default:
                break;
        }
    }
    console.log(result.join(' '))
}

Ladybugs([ 5, '3', '3 left 2', '1 left -2']);