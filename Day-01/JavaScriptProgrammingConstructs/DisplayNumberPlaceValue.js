//Create  a function to return the number in value format
function numberPlaceValueConverter(num) {
  //Check condition
  if (num >= 0 && num <= 9) {
    //Return the result
    return "Ones";
  } else if (num >= 10 && num <= 99) {
    //Return the result
    return "Tens";
  } else if (num >= 100 && num <= 999) {
    //Return the result
    return "Hundreds";
  } else if (num >= 1000 && num <= 9999) {
    //Return the result
    return "Thousands";
  } else {
    //Return the result
    return "Please enter number between 0-9999";
  }
}

//Create a variable number and take input from user
let number = prompt("Please enter number.");

//Display the result and call the function
console.log(numberPlaceValueConverter(number));
