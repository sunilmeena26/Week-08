//Create  a function to return the week day
function displayTheWeekDay(number) {
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

  //Use if and check the number is less than 7 and greater 0 on not
  if (number > 0 && number <= 7) {
    //Return the result
    return words[number - 1];
  } else {
    //Return the result
    return "Please enter Single Digit between 1-7";
  }
}

//Create a variable number to store user imput
let number = prompt("Enter number of day.");

//Print the result and call the function
console.log(displayTheWeekDay(number));
