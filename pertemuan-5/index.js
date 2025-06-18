//JS ES6
//String Literal

// const john = {
//   name: "John Doe",
//   age: 30,
// };

// //Hi, Nama saya John Doe, Umur saya 30 tahun
// let kalimat5 =
//   "Hi,  nama saya " + john.name + ". Umur saya " + john.age + " tahun";
// console.log(kalimat5);

// let kalimat6 = `Hi, nama saya ${john.name}. umur saya ${john.age} tahun`;
// console.log(kalimat6);

//Arrow Function

// function greetings(name) {
//   return `My name ${name}`;
// }

// console.log(greetings("John Doe"));

// //Implicit Return Value
// const greetings6 = (name) => `Hi, My name is ${name}`;
// console.log(greetings6("Bob"));

// //Contoh Penggunaan arrow function pada fungsi callback
// const array = [1, 2, 3, 4, 5];
// let output = array.map((item) => item);
// console.log(output);

//Default Parameter
const greetings = (fullName = "John", age = 30) =>
  `Hi, nama saya ${fullName} umur saya ${age} tahun`;
console.log(greetings());
