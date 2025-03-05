//Create a function to convert the unit inches to feet
function convertInchsToFeet(inches) {
  //return the result
  return (inches / 12).toFixed(2);
}

//Create a function to convert the unit Feet to Meter
function convertFeetToMeters(feet) {
  //return the result
  return (feet / 3.281).toFixed(2);
}

//Create a function to convert the unit squareFeet to Acres
function convertSquareFeetToAcres(squareFeet) {
  //return the result
  return squareFeet / 43560;
}

//Call the function and print the result
console.log("1ft = 12 in then 42 in = ", convertInchsToFeet(42), " ft");

//Call the function and print the result
console.log(
  "Rectangular Plot of 60 feet x 40 feet in meters : ",
  convertFeetToMeters(60),
  " meters x ",
  convertFeetToMeters(40),
  " meteres"
);

//Call the function and print the result
console.log(
  "Calculate area of 25 such plots in acres: ",
  convertSquareFeetToAcres(25)
);
