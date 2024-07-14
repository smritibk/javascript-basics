//? asynchronous

//? synchronous => existing or occurring at same time
//? asynchronous => not existing or occurring at the same time

//* node => single threaded
//* non-blocking => does not block code execution

//? real world scenario of code blocking =>
//? for loop for billion times
//? image processing
//? API request
//? DB operation

// H => Hexa Core
// U => Ultra Power
// K => unlocked
// H => High Performance

// console.log("HI");
// setTimeout(() => {
//   console.log("TimeOut");
// }, 5000);

// console.log("HELLO");

//? example 2

// console.log("Nepal");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 4000);

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// console.log("South Africa");


//? call stack function
//? Example 3

// const multiply = (num1, num2) => {
//   return num1 * num2;
// };

// const square = (n) => {
//   const squaredNumber = multiply(n, n);
//   return squaredNumber;
// };

// const printNumber = () => {
//   const result = square(4);
//   console.log(result);
// };

// printNumber();

//? Example 4
//? recursive function
//! error=> maximum call stack size exceeded

const sayHi = () => {
  sayHi();
};

sayHi();
