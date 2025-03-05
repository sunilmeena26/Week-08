//Create a funtion to generate the Three digit Number Using REPL
function getTwoDigitRandomNumber() {
  //Call the floor and random method and return the value
  return Math.floor(Math.random() * 900 + 100);
}

//Create a funtion to find the minimumNumberChecker value
function minimumNumberChecker(numbers) {
  //Create a variable minimumNumber to store the minimumNumberChecker value
  let minimumNumber = numbers[0];

  //use for loop
  for (let val of numbers) {
    //Check the conditon using if
    if (val < minimumNumber) {
      minimumNumber = val;
    }
  }

  //return the minimumNumber
  return minimumNumber;
}

//Create a funtion to find the maximumNumberChecker value
function maximumNumberChecker(numbers) {
  //Create a variable maximumNumber to store the maximumNumberChecker value
  let maximumNumber = 0;

  //use for loop
  for (let val of numbers) {
    //Check the conditon using if
    if (val > maximumNumber) {
      maximumNumber = val;
    }
  }

  //return the maximumNumber
  return maximumNumber;
}

//Create a array of numbers
let numbers = [];
//Use for loop to store the random values
for (let i = 0; i < 5; i++) {
  //call the function getTwoDigitRandomNumber and store random value in the a number array
  numbers[i] = getTwoDigitRandomNumber();
}

//Display the result
console.log("Random 5 Numbers: ", numbers);
console.log("minimumNumberChecker Number : ", minimumNumberChecker(numbers));
console.log("maximumNumberChecker Number : ", maximumNumberChecker(numbers));
