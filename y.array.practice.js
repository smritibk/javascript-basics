const laptopList = [
  {
    name: "LOQ",
    brand: "Lenovo",
    price: 1070,
  },
  {
    name: "Aspire 5",
    brand: "Acer",
    price: 730,
  },
  {
    name: "Modern 15",
    brand: "MSI",
    price: 690,
  },
  {
    name: "Macbook Pro M3",
    brand: "Apple",
    price: 2059,
  },
  {
    name: "Inspiron G15",
    brand: "Dell",
    price: 1015,
  },
  {
    name: "Idea Pad",
    brand: "Lenovo",
    price: 1059,
  },
  {
    name: "Zenbook 15",
    brand: "MSI",
    price: 1064,
  },
];

//? give 6% in 6:6 on each laptop

// const updatePrice = laptopList.map((item) => {
//   newPrice = item.price + (6 / 10) * item.price;
//   return {
//     ...item,
//     price: newPrice,
//   };
// });

// console.log(updatePrice);

// //? get all laptops whose price is below $1050

// const newList = laptopList.filter((item) => item.price < 1050);

// console.log(newList);

// //? find  sum of prices of all laptops

// const totalSum = laptopList.reduce((sum, item) => (sum += item.price), 0);

// console.log(totalSum);

//? increase price of Dell laptops by 10%

// const newList = laptopList.map((item, index, array) => {
//   if (item.name === "Dell") {
//     let newPrice = item.price + (1 / 10) * item.price;

//     return {
//       ...item,
//       price: newPrice,
//     };
//   }

//   return { ...item };
// });

// console.log(newList);



