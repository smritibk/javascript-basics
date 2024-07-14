// constant
//? in js, constant means which cannot be re-assignes

// const x = 7;
// x = 9;

//? mutation => process of having change
//? mutate => change
//? mutable => changeable
//? immutable => unchangeable

//? primary data type(string, number,  boolean, undefined, null) => cannot be reassigned, thus immutable
//? non-primary data type(object) => cannot be reassigned, but mutable

const phoneDetails = {
  brand: "Samsung",
};

// phoneDetails.brand = "Apple";
// console.log(phoneDetails);

// phoneDetails = true; // constant cannot be reassigned

// const obj1 = Object.freeze({
//   name: "Rohan",
// });

// obj1.name = "Roshan";
// console.log(obj1)

const obj1 = {
  name: "A",
};
const obj2 = {
  name: "B",
};


// TODO: after array
const obj1Keys = Object.keys(obj1);
const obj2Keys = Object.keys(obj2);

console.log(obj1Keys, obj2Keys);
