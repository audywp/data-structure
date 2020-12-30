console.log('Array');

const data = [1, 2, 3, 4, 5];

// concat
// const data1 = ['f', 'g', 'h', 'i', 'j'];
// const data2 = ['f', 'g', 'h', 'i', 'j'];

// console.log(data.concat(data1, data2, data2));

// join

console.log(data.join(''));

// foreach dan map
// foreach tidak mereturn data sama sekali, hanya untuk mengolah data
let newData = '';
data.forEach(function (value, index) {
  newData = data[2];
});

// map mereturn array baru yang sudah di olah
const dataMap = data.map(function (value, index) {
  value += 10;
  return value;
});

console.log(newData, 'foreach');
console.log(dataMap, 'map');

function datFuntion(params) {
  return 'hallo';
}

console.log(datFuntion());
