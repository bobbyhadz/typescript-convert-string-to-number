export {};

// EXAMPLE 1 - Convert a String to a Number in TypeScript

const str = '1234';

// 👇️ const num1: number
const num1 = Number(str);
console.log(num1); // 👉️ 1234

// 👇️ const num2: number
const num2 = +str;
console.log(num2); // 👉️ 1234

// ---------------------------------------------------

// // EXAMPLE 2 - Using the unary plus (+) operator

// const str = '1234';

// const num2 = +str;
// console.log(num2); // 👉️ 1234

// ---------------------------------------------------

// // EXAMPLE 3 - Convert a String to a Number with parseInt or parseFloat

// const str = '1234.5test';

// // 👇️ const num1: number
// const num1 = parseInt(str);
// console.log(num1); // 👉️ 1234

// // 👇️ const num2: number
// const num2 = parseFloat(str);
// console.log(num2); // 👉️ 1234.5

// ---------------------------------------------------

// // EXAMPLE 4 - Extract a Number from a String in TypeScript

// const str = 'bobby 1234 hadz';

// // 👇️ const replaced: string
// const replaced = str.replace(/\D/g, '');
// console.log(replaced); // 👉️ "1234"

// let num: number | undefined;

// if (replaced !== '') {
//   num = Number(replaced);
// }

// // 👇️ let num: number | undefined
// console.log(num); // 👉️ 1234
