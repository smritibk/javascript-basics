// operator => symbol which has certain meaning

// assignment operator
// arithmetic operator
// comparison operator
// logical operator

//? arithmetic operator => +, -, *, /, **, %

// console.log(2 + 3);
// console.log(2 - 3);
// console.log(2 * 3);
// console.log(3 / 2);
// console.log(2 ** 3);
// console.log(2 % 3); //remainder
// console.log(Math.floor(25 / 2));
// console.log(Math.ceil(25 / 2));

//?assignment operator => =, +=, -=, *=, /=, **=, %=
// let x = 2;
// x = x + 2; can be replaced by
// x += 2;
// console.log(x);
// let num = 51;
// num %= 2;
// console.log(num);

//? comparison operator
// it always result in boolean
// ==, ===, !=, !==, <, >, >=, <=

// let x = 3;
// let y = 5;
// == => weak comparison, checks only value
// === => strict comparison, checks value + datatype
// console.log(x == y);

// === is preferred
// let x = 3;
// let y = "3";
// console.log(x === y);

// let m = "A";
// let n = "a";
// console.log(m < n); // the ASCII value is compared
// console.log(m.toLowerCase() === n);

// let i = 5;
// let j = 6;
// console.log(i !== j);

//? logical operator => AND(&&), OR(||), NOT(!)

// console.log(true && false);
// console.log(true || false);
// console.log(!false);

let condition1 = 3 < 5;
let condition2 = "nepal" === "NEPAl";
console.log(condition1 && condition2);
console.log(condition1 || condition2);
