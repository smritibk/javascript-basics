//? object destructure

// ? ==============================example 1=========================
// const bookDetails = {
//   name: "Operating System",
//   author: "A. Tanenbaum",
//   publishedDate: "1990/01/01",
//   numberOfPages: 500,
//   coverPhoto: null,
//   bookPrice: undefined,
// };

// console.log(bookDetails);

// const { name, author, publishedDate, numberOfPages, coverPhoto, bookPrice } =
//   bookDetails;

// console.log(author);

//? =========================example 2==============================

// const obj1 = {
//   name: "Cup",
//   price: 50,
// };

// const obj2 = {
//   name: "TeaCup",
//   price: 70,
// };

// const { price } = obj1;

// const { price: priceOfProduct2 } = obj2; // renaming the object because the same name causes conflict

// console.log(priceOfProduct2, price);

//? =======================example 3==============================

// const student = {
//   name: "Sandhya",
//   college: "HCOE",
//   isGraduated: false,
//   image: null,
//   address: {
//     permanent: "A",
//     temporary: "B",
//   },
// };

// const {
//   name,
//   college,
//   address: { permanent: permanentAddress, temporary },
// } = student;

// console.log(permanentAddress);
