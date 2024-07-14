//? error
//? error is inevitable

// const x = 2;

// x = 5;
// console.log("HI!");

//? error handling

// const x = 2;
// try {
//   x = 5;
// } catch (error) {
//   console.log(error.message);  //as soon as the code encounters an error the flow is transferred to catch
// block and the error is handled and the flow of code is not interrupted
// }

// console.log("HI");

// const x = 2;
// try {
//   x = 5;
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("SEND EMAIL"); // this code is run in any context
// }

// console.log("HI");

//?==============example 2============

// let user=null
let user = { name: "Smriti" };
try {
  if (!user) {
    throw new Error("User does not exist");
  }

  console.log("Hi, how are you?");
} catch (error) {
  console.log(error.message);
}
