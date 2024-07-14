//* every
//* some

const ageList = [11, 18, 38, 49, 9, 8];

//? check if all users are adults or not

// let allAdult = true;
// ageList.forEach((item) => {
//   if (item < 18) {
//     allAdult = false;
//   }
// });

// console.log(allAdult);

const allAdult = ageList.every((item) => item >= 18);
console.log(allAdult);

const anyAdult = ageList.some((item) => item >= 18);
console.log(anyAdult);


const numList=[10,25,35,55]
numList.forEach
