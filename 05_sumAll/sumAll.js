const sumAll = function(zahl1, zahl2) {
    if(!Number.isInteger(zahl1) || !Number.isInteger(zahl2)) return "ERROR";
    if(zahl1 < 0 || zahl2 < 0) return "ERROR";
    if(zahl2 < zahl1){
        let help = zahl1;
        zahl1 = zahl2;
        zahl2 = help;
    }

    let sum = 0;
    for(let i = zahl1; i <= zahl2; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
