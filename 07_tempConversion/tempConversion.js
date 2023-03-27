const convertToCelsius = function(val) {
  return Math.round(10*(val-32)*5/9)/10;
};

const convertToFahrenheit = function(val) {
  return Math.round(10*((val*9/5)+32))/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
