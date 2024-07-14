//? array
// collection of data

//? statically typed language => c, java, c++
//? array is collection of data of same type

//? dynamic language=> javascript, python
//? array=> collection of data of any type

//? ========================example====================

// const x = [1, "hello", null, undefined, { name: "Nepal" }];
// console.log(x, typeof x);

//? real-world use case:we use array with same data type

// const temperatureList = [10, 20, 28, 22];
// console.log(temperatureList);

// const nationList = [
//   "Nepal",
//   "Sri Lanka",
//   "Netherland",
//   "South Africa",
//   "Bangladesh",
// ];

// console.log(nationList);

//? values in array can be accessed using index in a square bracket
//? and index always starts from '0'

// const laptopBrands = ["Asus", "MSI", "Lenovo", "Dell", "Apple"];
// console.log(laptopBrands[2]);
// console.log(laptopBrands.length); // it is the instance property of the array

// const bakeryItem = [
//   "black forest",
//   "white forest",
//   "red velvet",
//   "caramel",
//   "blueberry",
// ];

// for (let i = 0; i < bakeryItem.length; i++) {
//   console.log(bakeryItem[i]);
// }
//? this is why the data type of array is object
const obj = {
  0: "Apple",
  1: "Banana",
  2: "Orange",
  3: "Mango",
};

console.log(obj[0]); // equivalent to array 
