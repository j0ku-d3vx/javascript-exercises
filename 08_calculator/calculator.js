const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  const mapped = arr.map(item => {
    sum += item;
  });
  return sum;
};

const multiply = function(arr) {
  let multi = 1;
  const mapped = arr.map(item => {
    multi *= item;
  });
  return multi;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if(num === 0 || num === 1){
    return 1;
  }
  for(let i = num - 1; i >= 1; i--){
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
