//Create a function to convert temperature celsius to fahrenheit
function CelsiusToFahrenheitConverter(degC) {
  return ((degC * 9) / 5 + 32).toFixed(2);
}

//Create a function to convert temperature fahrenheit to celsius
function FahrenheitToCelsiusConverter(degH) {
  return (((degH - 32) * 5) / 9).toFixed(2);
}

//Create a function to handle temperature conversion
function temperatureConversion(temperature) {
  //Create a variable to store conversion type and take input from user
  let conversionType = prompt("Enter Conversion Type (Celsius or Fahrenheit)");

  //Use switch case to conversion selection
  switch (conversionType.toLowerCase()) {
    //Match cases and print the result
    case "celsius":
      //Print the result
      console.log(
        `${temperature} degH = ${FahrenheitToCelsiusConverter(
          temperature
        )} degC`
      );
      break;
    case "fahrenheit":
      //Print the result
      console.log(
        `${temperature} degC = ${CelsiusToFahrenheitConverter(
          temperature
        )} degH`
      );
      break;
    default:
      //Print the result
      console.log(
        "Invalid Conversion Type Please Select (Celsius or Fahrenheit)"
      );
  }
}

//Create a variable to store temperature and print the result
let temperature = parseFloat(prompt("Please Enter Temperature "));

//Call the function
temperatureConversion(temperature);
