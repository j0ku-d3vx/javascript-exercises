const fibonacci = function(num) {
    const fib = [0,1];

    if(num >= 0 && num !== isNaN(num)){
        for(let i = 2; i <= num; i++){
            fib[i] = fib[i - 2] + fib[i - 1];
        }
    
        return fib[num];
    } else {
        return "OOPS";
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
