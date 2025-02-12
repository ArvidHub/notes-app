const calculateTip = (total, tipPercent = 0.2) => total * tipPercent;

const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

export { celsiusToFahrenheit, fahrenheitToCelsius, calculateTip };
