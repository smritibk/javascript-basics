//? function
//? DRY => Do not Repeat Yourself
//? objective: code reusability, to reduce code redundancy, single point of failure

//?syntax
//function function_name(){
//some code
// }

// function sayHello() {
//   console.log("Hello.");
// }

// sayHello();

// function sayHello(userName) {
//   console.log(`Hello ${userName}`);
// }
// sayHello("Smriti");

// //? arrow function
// const sayHi = (studentName="user") => { //user is the default value
//   console.log(`Hi ${studentName}`);
// };
// sayHi("Suyasha");

// const sayHi = (studentName = "user") => {
//   //user is the default value
//   studentName = "Prashant";
//   console.log(`Hi ${studentName}`);
// };
// sayHi("Suyasha");

// const doSum = (x, y) => {
//   x = +x;
//   y = +y;
//   console.log(x + y);
// };
// doSum("8", "7");

//? wap tp print product of two numbers

// const doProduct = (num1, num2) => {
//   const product = num1 * num2;
//   return product;
// };
// const product = doProduct(5, 8);
// console.log(product);

// const doProduct = (num1, num2) => num1 * num2;

// const productResult = doProduct(3, 5);
// console.log(productResult);

//? WAF that checks whether a number is odd or even

// const isOddEven = (num1) => {
//   const check = num1 % 2;
//   return check;
// };

// const rem = isOddEven(6);
// if (rem === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// console.log(rem === 0 ? "Even" : "Odd");

// const isOddEven = (num) => {
//   let remainder = num % 2;

//   if (remainder === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };

// const result = isOddEven(46);
// console.log(result);

// const isOddEven = (num) => (num % 2 === 0 ? "even" : "odd");
// const result = isOddEven(45);
// console.log(result);

//? WAF to check polarity of a number, function should return positive, negative or zero

// const checkPolarity = (num) => {
//   let result;
//   if (num < 0) {
//     result = "negative";
//   } else if (num > 0) {
//     result = "positive";
//   } else {
//     result = "zero";
//   }
//   return result;
// };

// const result = checkPolarity(45);
// console.log(result);

// //? alternative code
// const checkPolarity = (num) =>
//   num > 0 ? "positive" : num < 0 ? "negative" : "zero";

// console.log(checkPolarity(0));


