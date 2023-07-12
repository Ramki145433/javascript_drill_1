function Problem4(inventory){
    let car_year_array = [];
    for (i = 0; i < inventory.length; i++){
        car_year_array.push(inventory[i].car_year)
    }
    
    return (car_year_array);
    
}

module.exports = Problem4