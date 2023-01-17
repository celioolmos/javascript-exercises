const convertToCelsius = function(fTemp) {
temp = ((fTemp-32) *5)/9
roundedTemp = temp.toFixed(1)
return parseFloat(roundedTemp);
};

const convertToFahrenheit = function(cTemp) {
temp = (cTemp*1.8) + 32  
roundedTemp = temp.toFixed(1)
return parseFloat(roundedTemp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
