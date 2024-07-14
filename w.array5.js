//* find
//? finds first item in array which satisfies the condition
//? it returns value not array
//? if any item does not satisfy condition, it return undefined

const numList = [-15, 456, -64, 656, 64];

//* find item greater than 20

// const value = numList.find((item, index, array) => {
//   if (item > 20) {
//     return item;
//   }
// });

// console.log(value);

const userList = [
  {
    id: 1,
    name: "Smriti",
    email: "smriti@gmail.com",
  },
  {
    id: 2,
    name: "Shubham",
    email: "suv@gmail.com",
  },
  {
    id: 3,
    name: "Samundra",
    email: "sam@gmail.com",
  },
  {
    id: 4,
    name: "Utsarga",
    email: "uts@gmail.com",
  },
  {
    id: 5,
    name: "Smarika",
    email: "smk@gmail.com",
  },
];

//? find the user whos eemail is "sam@gmail.com"

// newUserList = userList.find((item, index, array) => {
//   if (item.email === "sam@gmail.com") {
//     return item;
//   }
// });

//* variant code
// newUser = userList.find((item, index, array) => item.email === "sam@gmail.com");

// console.log(newUser);

//? findIndex
//? returns the index of that item

newUser = userList.findIndex((item) => item.email === "sam@gmail.com");
console.log(newUser);
