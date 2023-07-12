function Problem2(inventory){
    let lenght_obj = inventory.length;
    let last_car = inventory[lenght_obj-1];
    return "Last car is a" + last_car.car_make + " " + last_car.car_model;
}

module.exports = Problem2;