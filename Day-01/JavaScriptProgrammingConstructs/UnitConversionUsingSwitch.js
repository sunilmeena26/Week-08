//Create a function feetToInch to convert feet to inch
function feetToInch(feet) {
  //Return the value
  return feet * 12;
}

//Create a function feetToMeter to convert feet to Meter
function feetToMeter(feet) {
  //return the value
  return feet / 3.281;
}

//Create a function inchToFeet to convert inch to feet
function inchToFeet(inches) {
  //return the result
  return inches / 12;
}

//Create a function meterToFeet to convert meter to feet
function meterToFeet(meters) {
  //return the result
  return meters * 3.28084;
}

//Create a funtion for unit conversion
function unitConversion(number) {
  //Create a variablt option and take input from user
  let option = prompt(
    "Select the type of Conversion from 1 to 4 Like (1).feetToInch,(2).feetToMeter,(3).inchToFeet,(4).meterToFeet"
  );

  //Use switch case to check the condition
  switch (option) {
    //Match cases and print the result
    case "1":
      //print the result and call the method
      console.log(`${number} Feet = ${feetToInch(number)} Inches`);
      break;
    case "2":
      //print the result and call the method
      console.log(`${number} Feet = ${feetToMeter(number)} Meters`);
      break;
    case "3":
      //print the result and call the method
      console.log(`${number} Inches = ${inchToFeet(number)} Feet`);
      break;
    case "4":
      //print the result and call the method
      console.log(`${number} Meter = ${meterToFeet(number)} Feet`);
      break;
    default:
      console.log("Please Enter valid Option between 1-4");
  }
}

//Create a variable number and take input from user
let number = prompt("Please Enter a number ");

//Call the funtion
unitConversion(number);
