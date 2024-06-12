const reverseString = function(characters) {
    newString = "";

    for(let count = characters.length-1; count >= 0; count--){
        newString += characters[count];
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
