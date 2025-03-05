//Create a function printTheTAble to calculate and print the table of the power of two that are less than or equal to 2^n.
function printTheTable() {
  //Create a variable n to store integer and take output from user using command line argument
  let number = parseInt(process.argv[2]);

  //Use if statement when user give invalid input
  if (isNaN(number) || number <= 0) {
    console.log("Please enter valid input non negative number!");
    return;
  }
  let i = 0;
  //Using for loop to print the and calculate the table
  while (i < number) {
    console.log(`2^${i}=${Math.pow(2, i)}`);
    i++;
  }
}

//Call the function printTheTAble to print the table of the power of two that are less than or equal to 2^n.
printTheTable();
