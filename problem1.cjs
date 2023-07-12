function Problem1(inventory){
    for (let i = 0; i < inventory.length; i++){
        if(inventory[i].id == 33){
            output_id = inventory[i].id;
            break;
        }
    }
    return "Car " + inventory[output_id-1].id + " is a " + inventory[output_id-1].car_year + " " + inventory[output_id-1].car_make + " " + inventory[output_id-1].car_model;
}

let output_id;

module.exports = Problem1;
