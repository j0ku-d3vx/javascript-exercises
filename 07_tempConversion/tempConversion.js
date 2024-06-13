const convertToCelsius = function(calv) {
  return parseFloat(((calv - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(cels) {
  return parseFloat((cels * 9/5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
