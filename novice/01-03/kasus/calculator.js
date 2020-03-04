function calculateSupply(age, numPerDay) {
    var maxAge = 90;
    var totalNeeded =(numPerDay * 365) + (maxAge - age);
    var message = 'kamu membutuhkan ' + totalNeeded + ' kebahagiaan hingga ' + maxAge + ' tahun ';
    document.write(message);
    }
    calculateSupply(28, 36);
    calculateSupply(26, 20);
    calculateSupply(28, 400);