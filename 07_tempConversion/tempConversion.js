const convertToCelsius = function(temp) {

        let inCelsius = (temp - 32) * 5/9;
        return Number(inCelsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {

        let inFahrenheit = temp*9/5 + 32;
        return Number(inFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
