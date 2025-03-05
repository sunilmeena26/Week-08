//Create the function printNthHarmonicNumber to calculate and  print the harmonic number
function printNthHarmonicNumber() {
  //Create a variable n to store integer and take output from user using command line argument
  let number = parseInt(process.argv[2]);
  //Use if statement when user give invalid input
  if (isNaN(number) || number <= 0) {
    console.log("Please enter valid input non negative number!");
    return;
  }
  let harmonicNumber = 0;
  //Use for loop to calculate nth harmonic number
  for (let i = 1; i <= number; i++) {
    harmonicNumber += 1 / i;
  }
  //print the Nth harmonic number
  console.log(`Nth Harmonic Number ${harmonicNumber}`);
}

//Call the funtion printNthHarmonicNumber to calculate and print the nth harmonic number
printNthHarmonicNumber();
