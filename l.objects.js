//? object
//? key-value pair

// const studentDetails = {};
// console.log(studentDetails, typeof studentDetails);

// const obj1 = {};
// const obj2 = {};
// console.log(obj1 === obj2); result: false

// student 1
// let fName = "Rohan";
// let lName = "Bhandari";
// let PAddress = "Baneshwor";
// let tAddress = "Sydney";
// let isGraduated = true;

// let student1 = {
//   firstName: "Rohan",
//   lastName: "Bhandari",
//   isGraduated: true,
//   permanentAddress: "Baneshwor",
//   temporaryAddress: "Sydney",
// };

//console.log(student1);

//My name is Rohan Bhandari
// console.log(`My name is ${student1.firstName}`);

//? to access data
//? dot operator
//? to access value in obeject
// console.log(student1.firstName);
// console.log(student1.permanentAddress);

//? square bracket operator
// console.log(student1["isGraduated"]);
// console.log(student1["temporaryAddress"]);

//? CRUD
//? C=> Create/Add
//? R=> Read/Retrieve
//? U=> Update/Edit
//? D=> Delete/Remove

// let student1 = {
//   firstName: "Rohan",
//   lastName: "Bhandari",
//   isGraduated: true,
//   address: {
//     permanentAddress: "Baneshwor",
//     temporaryAddress: "Sydney",
//   },
// };

// ?read operation
// console.log(student1.address.permanentAddress);
// console.log(student1["address"]["permanentAddress"]);
// console.log(student1["address"].permanentAddress);
// console.log(student1.address["permanentAddress"]);

//?insert or update (Upsert)
// student1.firstName = "Roshna";
// student1.age = 35;
// console.log(student1);
// student1["address"]["permanentAddress"] = "Chitwan";
// console.log(student1);

// let nationDetail = {
//   name: "Nepal",
//   population: "3 crore",
//   perCapita: 1400,
// };

// //? delete
// delete nationDetail.name;

// console.log(nationDetail);

// nationDetail.name = undefined;
// console.log(nationDetail);

const cupDetails = {
  name: "Water cup",
  brand: "Serve Well",
  color: "Pink",
  color: "Green",
  name: "Tea cup",
};

console.log(cupDetails); //latest value is taken in the memory space so, pahila ko value replace hunxa kina bhane auta value le matra space occupy gareko hunxa
