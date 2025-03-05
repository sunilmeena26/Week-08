//Create a function numberToWord to convert the number into word
function numberToWord(number) {
  //Create an constant array to store the value
  const words = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  //Check condition that number is single digit or not
  if (number >= 0 && number <= 9) {
    //Return the result
    return words[number];
  } else {
    //Return the result
    return "Please enter Single Digit between 0-9";
  }
}

//Create a variable and take input from user
let number = prompt("Please Enter A single digit number.");

//Print the result and call the function
console.log(numberToWord(number));
