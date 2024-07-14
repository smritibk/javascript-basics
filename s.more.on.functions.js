//? callback function
//? function which is passed as an argument to another function is called as callback function

//?=============================example-of-callback-function==================================
// const getSum = (x, y, callback) => {
//   let sum = x + y;
//   callback(sum);
// };

// getSum(3, 4, (value) => {
//   console.log(value);
// });

//? function returning function
//* closure => function + lexical environment (surrounding environment)


//? we can say that makeAdder is a function factory
// const makeAdder = (x) => {
//   const doSum = (y) => {
//     let sum = x + y;
//     return sum;
//   };
//   return doSum;
// };

// doSum5 = makeAdder(5);
// doSum10 = makeAdder(10);
// console.log(doSum5(10));
// console.log(doSum10(10));

// const sum = makeAdder(25)(5); // at first 25 is fed to the makeAdder function and a function is returned and then 5 is given to the returned function
// console.log(sum);

//? Aesthetic
const makeAdder = (x) => (y) => x + y;

console.log(makeAdder(10)(5));


//? Higher Order Function
//* 1. Callback function (function as an argument to another function)
//* 2. Closure (function returning function)