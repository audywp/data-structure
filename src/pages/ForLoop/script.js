console.log('Data Structure');

// looping with increment

// for (let index = 0; index < 10; index++) {
//   console.log(`Hai looping: ${index + 1}`);
// }

// looping with decrement

// for (let index = 5; index > 0; index--) {
//   console.log('Hai looping: decrement');
// }

// rules buat for loop tampilkan ke layar angka 1 - 20, jika angka nya kelipatan 5, tampilkan ke layar boom

// expected output : [1,2,3,4,"boom",6,7,8,9,"boom",dst]

// jawaban

// for (let i = 1; i <= 20; i++) {
//   if (i % 5 == 0) {
//     console.log('boom');
//   } else {
//     console.log(i);
//   }
// }

// rules , dapatkan huruf vocal a, pada sebuah string

// const nama = 'Dheddy';
// console.log(nama.length);

// // jawab
// let count = 0;
// for (let i = 0; i < nama.length; i++) {
//   nama[i] == 'a' ? count++ : null;
// }
// console.log(count);

// for (index = 0; index < 5; index++) {
//   console.log('looping terluar');
//   // nested loop
//   for (index = 0; index < 6; index++) {
//     console.log('Nested 1');
//   }
//   console.log('lopping di bawah nested');
// }

// Program Starts:
// Enter height:
// 7
// Enter width:
// 5

const num1 = 5;
const num2 = 3;

// const a = 7;
// console.log(a.length);
for (let index = 0; index < num1; index++) {
  let temp = '';
  for (let index = 0; index < num2; index++) {
    temp += '#';
  }
  console.log(temp);
}
// expected Output:clear
// #####
// #####
// #####
// #####
// #####
// #####
// #####
