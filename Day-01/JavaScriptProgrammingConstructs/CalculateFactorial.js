//Create a function calculateFactorial to calculate the factorial of the number
function calculateFactorial(number) {
  //Create a variable to store the product of the numbers
  let factorialOfNumber = 1;

  //use for loop
  for (let i = 1; i <= number; i++) {
    factorialOfNumber = i * factorialOfNumber;
  }

  //return the factorial of the number
  return factorialOfNumber;
}

//Create a variable number to store integer and take output from user using command line argument
let number = parseInt(process.argv[2]);

//Use if statement when user give invalid input
if (isNaN(number)) {
  console.log("Please enter valid number!");
  return;
}

//Create a variable to factorail of the number and call the method
let factorialOfNumber = calculateFactorial(number);

//print the result factorial of a number
console.log("Factorial is: ", factorialOfNumber);
