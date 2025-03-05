//Create a function to check the number is prime or not
function isPrime(number) {
  //Use if to check the condition If number is less than 1 so return the result
  if (number <= 1) {
    return false;
  }

  //Use for loop to check the prime number
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i == 0) {
      //Return the result
      return false;
    }
  }

  //Return the result
  return true;
}

//Create a  funtion to find the palindrome
function getPalindrome(number) {
  //Create a variable to store the value
  let reverse = 0;

  //Create a variable temp to store the number
  let temp = number;

  //Use while loop to find revere of the number
  while (temp > 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  //return the value
  return reverse;
}

//Create a variable and take input from user
let number = parseInt(prompt("Please enter a number"));

//Create a variable to store the palindrome of number and call the method
let numberPalindrome = getPalindrome(number);

//Check the condition and print the result
if (isPrime(number) && isPrime(numberPalindrome)) {
  //Print the result
  console.log(
    `${number} And It's Palindrome Number is ${numberPalindrome} And Both are prime Number`
  );
} else if (isPrime(number) && !isPrime(numberPalindrome)) {
  //Print the result
  console.log(
    `${number}  is Prime, But It's Palindrome ${numberPalindrome} is not prime`
  );
} else {
  //Print the result
  console.log(`${number} is not prime`);
}
