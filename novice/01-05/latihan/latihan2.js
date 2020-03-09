function sumOfSalary(obj){
    let sum = 0;
    for(let salary of Object.values(obj)){
        sum += salary
    }
    return sum;
}