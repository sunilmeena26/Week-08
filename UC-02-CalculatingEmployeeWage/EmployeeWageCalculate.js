//Create a constant variable to store Part time,full time working hours
const PART_TIME = 4;
const FULL_TIME = 8;
//Create a constant variable to store WAGE per hours in $
const WAGE_PER_HOURS = 20;

//Create a variable to store employee working hours
let employeeHours = 0;
let employeeStatus = Math.floor(Math.random() * 10) % 3;

//Use switch statement to check employee working category
switch (employeeStatus) {
  //If employee status is 1 than execute case 1
  case 1:
    employeeHours = PART_TIME;
    break;
  //If employee status is 2 than execute case 2
  case 2:
    employeeHours = FULL_TIME;
    break;
  //If employee status is more than 2 execute default block
  default:
    employeeHours = 0;
    break;
}

//Create a employeeWage varaible to store employee wage
let employeeWage = employeeHours * WAGE_PER_HOURS;
//print the employee wage on console
console.log("Employee Wage: $" + employeeWage);
