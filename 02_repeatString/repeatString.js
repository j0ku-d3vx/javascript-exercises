const repeatString = function(odin, num) {
    let string = "";

    if(num >= 0){
        for(let i = 0; i<num; i++){
            string += odin;
        }
        return string;
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
