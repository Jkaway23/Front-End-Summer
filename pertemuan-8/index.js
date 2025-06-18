// // Module in JS
// import { fullName, numbers, john as johnobj, angka } from "./data.js";
// console.log(fullName, angka, johnobj);

// Asynchronous js -> single thread -> blocking

//Synchrounous
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

//Asynchrounous -> multi thread -> not blocking
//1. Parallel
// console.log("Proses 1");
// setTimeout(() => console.log("Proses 2"), 5000);
// console.log("Proses 3");
// setTimeout(() => console.log("Proses 4"), 3000);

// //2. Concurrent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

// let condition = true;
// let newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("Promise Berhasil");
//   } else {
//     reject("Promise Gagal");
//   }
// });

// //Cara pakai promise
// //1. then-catch
// newPromise.then((result) => console.log(result));
// newPromise.catch((error) => console.log(error));

//2. Async - Await
const getData = async () => {
  const result = await newPromise;
  console.log(result);
};

getData();
