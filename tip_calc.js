function tipAmount (bill, service) {
    if (service == 'good') {
        var tip = bill * .20;
        return tip.toFixed(2);
    }
    else if (service == 'fair') {
        tip = bill * .15;
        return tip.toFixed(2);
    }
    else if (service == 'bad') {
        tip = bill * .10;
        return tip.toFixed(2);
    }
    else {
        return('Invalid entries');
    }
}
// console.log(tipAmount(40.24, 'bad'));


function totalAmount (bill, service) {
    var total = Number(tipAmount(bill, service)) + bill;
    return total;
}
console.log(totalAmount(41.23, 'fair'));