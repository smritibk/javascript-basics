//? Why do we use objects?

// Objects let you group related data together and split code into logical pieces.
// In JavaScript, we have primitive values and reference values.
// Number, Boolean, Null, Undefined, String, and Symbol are primitive values,
// while objects like DOM nodes, Arrays, and so on are reference values.

//? object
//1. structured data=> key value pair=> group of primary data types ===
//2. encapsulation => hide data, controlled access to data

// const myHouseDetails = {
//   numberOfRooms: 6,
//   numberOfMembers: 3,
//   colorOfHouse: "White",
//   builtYear: 2028,
//   numberOfStorey: 3,
// };

// console.log(myHouseDetails);

// delete myHouseDetails.numberOfMembers;
// console.log(myHouseDetails);

// myHouseDetails.numberOfRooms = 8;
// console.log(myHouseDetails);

// myHouseDetails.estimatedPriceOfHouse = 4500000;
// console.log(myHouseDetails);

// console.log(
//   `I have a ${myHouseDetails.colorOfHouse} colored house with ${myHouseDetails.numberOfRooms} rooms, where ${myHouseDetails.numberOfMembers} people are living. The house is ${myHouseDetails.numberOfStorey} storey and was built in ${myHouseDetails.builtYear} with an estimated budget of ${myHouseDetails.estimatedPriceOfHouse}`
// );

// Object.defineProperty(obj, "name", {
//   value: "Shubham",
//   enumerable: true, // data hide
//   writable: true, // data updatable
//   configurable: true,// data deletable
// });

//? dynamic
//? we can add, edit, update and delete property easily

// const laptopDetails = {
//   name: "F15",
//   brand: "Asus",
//   ram: 16, //GB
//   ssd: 512, //gb
// };

// let key = "brand";
// console.log(laptopDetails[key]); // can only be done by square bracket

//? 4. abstraction => hide process

//? modular => better organization of data
