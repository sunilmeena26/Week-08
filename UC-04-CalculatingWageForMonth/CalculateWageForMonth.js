function employeeWorkingHours(employeeStatus) {
  //Create a constant variable to store Part time,full time working hours
  const PART_TIME = 4;
  const FULL_TIME = 8;

  //Use switch statement to check employee working category
  switch (employeeStatus) {
    //If employee status is 1 than execute case 1
    case 1:
      return PART_TIME;
    //If employee status is 2 than execute case 2
    case 2:
      return FULL_TIME;
    //If employee status is more than 2 execute default block
    default:
      return 0;
  }
}

//Create a constant variable to store WAGE per hours in $
const WAGE_PER_HOURS = 20;
const WORKING_DAYS_IN_MONTHS = 20;
let employeeHours = 0;
for (let days = 0; days < WORKING_DAYS_IN_MONTHS; days++) {
  //Create a variable to store employee status in numeric value 0,1,and 2
  let employeeStatus = Math.floor(Math.random() * 10) % 3;
  //Create a employeeWage varaible to store employee wage
  employeeHours += employeeWorkingHours(employeeStatus);
}

//Create a employeeWage varaible to store employee wage
let employeeWageOfMonth = employeeHours * WAGE_PER_HOURS;

//print the employee wage on console
console.log("Employee Wage Of Month: $", employeeWageOfMonth);
