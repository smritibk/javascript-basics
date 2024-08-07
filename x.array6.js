//? reduce
// *

const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//? forEach => does not return any value
// let sum = 0;
// numList.forEach((item, index, array) => {
//   sum = sum + item;
//   console.log(item);
// });

// console.log(sum);

// const total = numList.reduce((sum, item, index, array) => {
//   sum += item;
//   return sum;
// }, 0);

// const total = numList.reduce((product, item, index, array) => {
//   product *= item;
//   return product;
// }, 1);

const total = numList.reduce((product, item) => (product *= item), 1);

console.log(total);
