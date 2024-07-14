// object copy

// const print = (values) => {
//   console.log(values);
// };

// const student1 = {
//   name: "Sandhya",
//   college: "HCOE",
//   isGraduated: false,
//   image: null,
//   address: {
//     permanent: "Kathmandu",
//     temporary: "Chitwan",
//   },
// };

// print(student1);

//? shallow copy
//const student2 = student1;

//student2.name = "Kalyan";

//console.log(student1);

//? spread operator(...) => is preferred if every data ia primary type
//? shallow copy
//? example 1
// const student2 = { ...student1 };
// student2.name = "Yadav";

// console.log(student2);
// console.log(student1);

//? example 2
// const student2 = { ...student1 };
// student2.address.permanent = "Biratnagar";

// console.log(student1);

//? deep copy
// structuredClone

// const student2 = structuredClone(student1);
// student2.address.permanent = "Pokhara";
// console.log(student1);
// console.log(student2);
