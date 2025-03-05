//Create a function to perform some arithmetic operation and print the max an min answer
function arithmeticOperations(a, b, c) {
  //Create variable to perform arithmetic operation and store the answer
  const operation1Result = a + b * c;
  const operation2Result = (a % b) + c;
  const operation3Result = c + a / b;
  const operation4Result = a * b + c;

  //Create an array to store the all operation answer
  const answer = [
    operation1Result,
    operation2Result,
    operation3Result,
    operation4Result,
  ];

  console.log(answer);

  //Call the max function and print the answer
  console.log("Maximum answer: ", Math.max(...answer));

  //Call the min function and print the answer
  console.log("Minimum answer: ", Math.min(...answer));
}

//Create variables and take input from user
const a = prompt("Please enter the value of A:");
const b = prompt("Please enter the value of B:");
const c = prompt("Please enter the value of C:");

//Call the function and perform arthimetic operation
arithmeticOperations(parseInt(a), parseInt(b), parseInt(c));
