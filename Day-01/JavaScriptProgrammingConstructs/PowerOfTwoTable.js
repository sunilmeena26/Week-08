//Create a funtion to print the table of powers of 2
function powerOfTwoNumber(number) {
  //use for loop to print and calculae the table of power of 2
  for (let i = 1; i <= number; i++) {
    //Create a variable to store power of 2
    let power = Math.pow(2, i);
    //if power of 2 greater than 256 than break the loop
    if (power > 256) {
      break;
    }
    //print the table of power of table
    console.log(`2^${i}=${power}`);
  }
}

//Create a variable n to store integer and take output from user using command line argument
const number = parseInt(process.argv[2]);

//Use if statement when user give invalid input
if (isNaN(number) || number <= 0) {
  console.log("Please enter valid and non negative number!");
  return;
} else {
  //call the function powerOfTwoNumber and pass argument as number
  powerOfTwoNumber(number);
}
