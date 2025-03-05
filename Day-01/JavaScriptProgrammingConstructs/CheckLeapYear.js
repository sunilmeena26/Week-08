//Create a function to check the Year is Leap Year or not
function learYearChecker(year) {
  //Check the condition that Year is 4-Digit or not
  if (year >= 1000 && year <= 9999) {
    //check the leap year condition
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      //Return the result
      return `${year} is a leap year.`;
    } else {
      //Return the result
      return `${year} is not a leap year.`;
    }
  } else {
    //Return the result
    return "Please enter a 4-digit year.";
  }
}

//Create a variable year and take input from user
let inputYear = prompt("Enter Year:");

//print the result and call the function
console.log(learYearChecker(inputYear));
