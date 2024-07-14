//? default value

// const getSum = (c, a = 4, b = 0) => {
// default value should always be at last while assigning the parameter
//   let sum = a + b + c;
//   return sum;
// };
// console.log(getSum(6));

// const greetUser = (userName = "user") => {
//   console.log(`Good morning, ${userName}`);
// };

// greetUser("Smriti");

// greetUser();

//?             ====================example 2======================
//? example without default value

const greetUser = (userName) => {
  console.log(`Good morning, ${userName || "user"}`);
};

greetUser("Smriti");

greetUser();
