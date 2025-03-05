//Create a funtion to generate the Two digit Number Using
function getTwoDigitNumber() {
  //Call the floor method and random method to generate random number and return the value
  return Math.floor(Math.random() * 90 + 10);
}

//Create a function to calculate sum all the numbers
function calculateSumOfNumber(numbers) {
  //Create a variable to store value
  let sum = 0;

  //Use for loop
  for (let val of numbers) {
    sum += val;
  }
  //return the sum
  return sum;
}

//Create a funtion to calculate the average of numbers
function calculateAverageOfNumber(number) {
  //Return the average
  return calculateSumOfNumber(number) / number.length;
}

//Create a array numbers to store random number
let numbers = [];
//Use for loop to store the random number in array
for (let i = 0; i < 5; i++) {
  numbers[i] = getTwoDigitNumber();
}

//Display the result as random numbers, sum of the number and average of the numebr
console.log("Random 5 values: ", numbers);
console.log("Sum of the Numbers: ", calculateSumOfNumber(numbers));
console.log("Average of the Numbers: ", calculateAverageOfNumber(numbers));
