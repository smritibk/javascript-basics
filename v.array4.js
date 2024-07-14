//? filter (there is some condition to satisfy)
//? returns a new array
//? there is a high chance of
// ? original array length !== returned array length
//? it selects/deselects value
//? it does not change array item

// const numList = [1, 10, 33, -6, -64, 46, -25];
// const newNumList = numList.filter((item, index, array) => item < 0);

// console.log(newNumList);

const productList = [
  {
    id: 1,
    name: "NightVisionGlasses",
    price: 45,
  },
  {
    id: 2,
    name: "Helmet",
    price: 5,
  },
  {
    id: 3,
    name: "Gloves",
    price: 7,
  },
  {
    id: 4,
    name: "Goggles",
    price: 43,
  },
];

//? find all items whose price is less than $10

// newItemList = productList.filter((item, index, array) => {
//   if (item.price > 10) {
//     return item;
//   }
// });

//? alternative code
newItemList = productList.filter((item, index, array) => item.price < 10);

console.log(newItemList);
