//Create  a function to return the week day as from user input
function displayWeekDayUsingSwitch(number) {
  //Create an constant array to store the week of the name
  const words = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Use a switch statement to check case with the number
  switch (number) {
    //Match the cases and return the value
    case 1:
      return words[0];
    case 2:
      return words[1];
    case 3:
      return words[2];
    case 4:
      return words[3];
    case 5:
      return words[4];
    case 6:
      return words[5];
    case 7:
      return words[6];
    default:
      return "Please enter a single digit between 1-7";
  }
}

//Create a variable to store a number and take input from user
let number = parseInt(prompt("Please enter number of day."));

//Display the result and call the function
console.log(displayWeekDayUsingSwitch(number));
