const nations = ["Nepal", "USA", "Japan", "Australia"];

// const newNationList = nations;
// newNationList[0] = "Argentina";
// console.log(nations);

// //? spread operator(...) => shallow copy
// const newNationList = [...nations];
// newNationList[0] = "Chile";
// console.log(nations);

const userList = [{ name: "A" }, { name: "B" }];

// const newUserList = [...userList];  // this only copies the reference address and do not create a new object

// newUserList[0].name = "Z";
// console.log(newUserList);
// console.log(userList);

//? deep copy

const newUserList = structuredClone(userList);

newUserList[0].name = "Z";
console.log(userList);
