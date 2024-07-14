//? rest operator=> acts as collector

//?(...)

// const getSum = (a, b, ...otherValues) => {
//   const total = otherValues.reduce((total, item) => {
//     total = total + item;
//   }, 0);
//   return a + b + total;
// };
// let result = getSum(1, 2, 3, 4, 5, 6, 7, 8, 9);

// console.log(result);

const getProduct = (x, y, ...otherValues) => {
  console.log(otherValues);
  let product = otherValues.reduce((total, item) => {
    total = total * item;
    return total;
  }, 1);

  return product * x * y;
};

const result = getProduct(1, 2, 3, 4, 5, 6);

console.log(result);
