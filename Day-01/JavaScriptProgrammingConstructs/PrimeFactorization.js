//Create a function isPrime to compute and print the prime factors of a number N
function primeFactors(number) {
  //check if number is less than equal to 1 than print the no prime factors for numbers those less than equal to 1
  if (number <= 1) {
    console.log("No prime factors for numbers those less than or equal to 1.");
    return;
  }

  //Use while loop to start with the smallest prime factor, which is 2
  while (number % 2 === 0) {
    console.log(2);
    number /= 2;
  }

  //Use for to check for odd factors from 3 to √N
  for (let i = 3; i * i <= number; i += 2) {
    while (number % i === 0) {
      // Print the prime factor
      console.log(i);
      N /= i;
    }
  }

  // If N is greater than 2, then N itself is prime
  if (number > 2) {
    console.log(number);
  }
}

//Create a variable number to store integer and take input from user using command line argument
let number = parseInt(process.argv[2]);

//Use if statement when user give invalid input
if (process.argv.length < 3 || isNaN(number)) {
  console.log("Please enter valid number!");
} else {
  //prime factors of the number
  console.log(`Prime factors of ${number} are:`);
  primeFactors(number);
}
