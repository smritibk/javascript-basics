//? array destructure
//? handy in array having less values

const numList = [11, 25, 75];

// console.log(numList[0]);
// console.log(numList[1]);
// console.log(numList[2]);

const [a, b, c] = numList;
let sum = a + b + c;
console.log(sum);
