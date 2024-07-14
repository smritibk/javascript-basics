//? map, filter, find, findIndex, reduce
//? loop based

let studentList = ["Saugat", "Shubham", "Smriti", "Utsarga", "Unik"];
// console.log(studentList);

//? map returns new array
//? to alter thr values of the array
//? original array length === returned array length
// const newStudentList = studentList.map((item, index, array) => {
//   console.log(item, index, array);
//   return 0;
// });

// console.log(newStudentList);

// newStudentList = studentList.map((item, index, array) => {
//   let uppercaseName = item.toUpperCase();
//   return uppercaseName;
// });

// console.log(newStudentList);

const priceList = [25, 64, 36, 46, 54];

//* increase the price of every item by $3

// newPriceList = priceList.map((item, index, array) => {
//   const newPrice = item + 3;
//   return newPrice;
// });

// console.log(newPriceList);

//? improved aesthetic
newPriceList = priceList.map((item, index, array) => item + 3);
console.log(newPriceList);

//? Array of objects

const productList = [
  {
    id: 1,
    name: "NightVisionGlasses",
    price: 45,
  },
  {
    id: 2,
    name: "Helmet",
    price: 485,
  },
  {
    id: 3,
    name: "Gloves",
    price: 457,
  },
  {
    id: 4,
    name: "Goggles",
    price: 435,
  },
];

//? increase the price list of each item by 10%

// newArray = productList.map((item, index, array) => {
//   const newPrice = item.price + (1 / 10) * item.price;
//   return {
//     id: item.id,
//     name: item.name,
//     price: newPrice,
//   };
// });
// console.log(newArray);

newArray = productList.map((item, index, array) => {
  const newPrice = item.price + (1 / 10) * item.price;
  return {
    ...item,
    price: newPrice,
  };
});
console.log(newArray);
