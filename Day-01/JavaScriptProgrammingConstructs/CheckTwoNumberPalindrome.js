//Create a function to check the is palindrome or not
function isPalindrome(num) {
  //Create a variable to store the value
  let reverseNumber = 0;

  //Create a variable temp to store the num
  let temp = num;

  //Use while loop to find reverseNumbererse of the number
  while (temp > 0) {
    reverseNumber = reverseNumber * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  //Use if to check the condition
  if (reverseNumber === num) {
    //return true if condition is true
    return true;
  } else {
    //return true if condition is true
    return false;
  }
}

//Create two variable and take input from user
let number1 = parseInt(prompt("Enter first number"));
let number2 = parseInt(prompt("Enter second number"));

//Call the function and print the result
console.log(
  `${number1} and ${number2} both number are palindrome: ${
    isPalindrome(number1) && isPalindrome(number2)
  }`
);
