//Create  a function to convert the number into word
function numberInWordUsingCase(number) {
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

  //uSe switch statemnt to check condition Using switch statement
  switch (parseInt(number)) {
    //Match the cases and return the result
    case 0:
      return words[0];
    case 1:
      return words[1];
    case 2:
      return words[2];
    case 3:
      return words[3];
    case 4:
      return words[4];
    case 5:
      return words[5];
    case 6:
      return words[6];
    case 7:
      return words[7];
    case 8:
      return words[8];
    case 9:
      return words[9];
    default:
      //return the value if number does not macth any condition
      return "Please enter a single digit between 0-9";
  }
}

//Create a variable and take input from user
let number = prompt("Enter a single digit number");

//Print the result and call the function
console.log(numberInWordUsingCase(number));
