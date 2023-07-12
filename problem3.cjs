function Problem3(inventory){
    let car_array = [];
    let toatl_array = [];
    for (i =0; i < inventory.length; i++){
        car_array.push(inventory[i].car_model)
    }
    
    let car1_array = car_array.sort();
    

    for (i = 0; i < car1_array.length; i++){
        let choose = car1_array[i];
        for(j = 0; j < inventory.length; j++){
            if(choose == inventory[j].car_model){
                toatl_array.push(inventory[j])
            }
        }
    }

    return toatl_array;
}


module.exports = Problem3;