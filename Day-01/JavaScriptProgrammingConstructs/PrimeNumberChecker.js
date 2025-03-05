//Create a function isPrime to check number is prime of not
function isPrime(number) {
  //check if number is less than equal to 1 than return false
  if (number <= 1) {
    return false;
  }
  //Create a varaible to store square root of the number
  let sqrt = Math.sqrt(number);
  //use for loop
  for (let i = 2; i < sqrt; i++) {
    //check numberr is divisible or not of any number
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

//Create a variable n to store integer and take output from user using command line argument
let number = parseInt(process.argv[2]);

//Use if statement when user give invalid input
if (isNaN(number)) {
  console.log("Please enter valid number!");
  return;
}

//use if-else and print the prime number result and call the method
if (isPrime(number)) {
  console.log(number + " is a prime number.");
} else {
  console.log(number + " is not a prime number.");
}
