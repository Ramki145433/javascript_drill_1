function Problem6(inventory){
    let car_make_array = []
    for (i = 0; i < inventory.length; i++){
        let element = inventory[i].car_make;
        if(element == "BMW" || element == "Audi"){
            car_make_array.push(inventory[i])
        }
    }
    let output = JSON.stringify(car_make_array)
    return output
}

module.exports = Problem6;