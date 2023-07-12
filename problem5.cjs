function Problem5(choose){
    let count = 0;

    for(i = 0; i < choose.length; i++){
        if(choose[i] < 2000){
            count = count + 1;
        }
    }
    
    return count
}

module.exports = Problem5
