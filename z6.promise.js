//* Promise => something that happens in future

//? tri state=>
//? pending
//? success
//? failure

//? to get result, we need to resolve promise

//? 1. call back function

const getSum = (a, b) => {
  console.log(a + b);
};

getSum(2, 3);

//? 2. .then.catch

//? 3. async await
