//? methods in array
// push, pop, shift, unshift, reverse

//? push => to add element(s) at the end of an array
//? pop => to remove element from the end of an array

// const numList = [10, 22, 33];
// numList.push(13, 55, 26); // push changes is original array
// console.log(numList);

// numList.pop();
// console.log(numList);

//? shift => to remove first item from array
//? unshift => to add item(s) at starting of array

// let studentList = ["Saugat", "Shubham", "Samundra", "Smriti"];
// studentList.shift();
// studentList.unshift("Suyasha", "Utsarga", "Unik");
// console.log(studentList);

//? reverse => reverse the order of items in array
//? toReverse => returns a new array after reversing the order of the previous array

// const priceList = [15, 16, 17, 18, 19];
// priceList.reverse();
// const newPriceList = priceList.toReversed();
// console.log(priceList);
// console.log(newPriceList);

//? includes
//? checks whether array contains specific value or not
//? returns in boolean(true or false)

// const laptops = ["MacBook M3", "TUF F15", "Nitro 5", "A15"];
// const result = laptops.includes("MacBook M3");
// console.log(result);

// const currentRoute = "/user/edit/1";
// console.log(currentRoute[1]);
// const result = currentRoute.includes("edit");
// console.log(result);

//? slice => it  does not change the original array
//? to get the portion of array from the original array
//? when given start and end=> start is included, item of end index is excluded

// const animals = ["ant", "bison", "camel", "duck", "elephant"];
// const newAnimalsList = animals.slice();
// const newAnimalsList = animals.slice(2);
// const newAnimalsList = animals.slice(1, 4);
// console.log(newAnimalsList);

//? splice
//? remove or replace existing items

// const months = ["Jan", "March", "April", "May", "June", "July"];
// months.splice(4);  // removes items from given index
// months.splice(2, 1);  //arrayName.splice(startIndex, deleteCount)
// months.splice(1, 0, "Feb");
// months.splice(6, 0, "August", "September", "October");
// console.log(months);

//? sort
//? ascending or descending

// let studentList = [
//   "Saugat",
//   "Abhisek",
//   "Yadav",
//   "Smriti",
//   "Yeshika",
//   "Lokendra",
// ];

// studentList.sort();  // ascending
// studentList.sort().reverse();   // descending

// console.log(studentList);

let numList = [1, 45, 25, 11, 56, 4, 74, 35, 756, 435, 736, 366];
numList.sort((a, b) => a - b);      //ascending numeric sort
numList.sort((a, b) => b - a);       //descending numeric sort
console.log(numList);
