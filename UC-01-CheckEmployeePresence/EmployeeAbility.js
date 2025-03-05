//Creata a variable to store 0
const IS_ABSENT = 0;
//Create a variable attendenceStatus to store to attendence states in numeric
let attendenceStatus = Math.floor(Math.random() * 10) % 2;
console.log(attendenceStatus);

//check condition if attendence equals to IS_ABSENT to employee is absent
if (attendenceStatus == IS_ABSENT) {
  //print the presence result in console window
  console.log("Employee is absent!");
} else {
  console.log("Employee is present!");
}
