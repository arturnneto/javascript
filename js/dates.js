// Date
let data0 = new Date();
let data1 = new Date('August 11 2022 11:16');
let data2 = new Date(2022,7,11,11,16);
console.log(data0 + '\n' + data1 + '\n' + data2);
console.log(data1.getMinutes());
data1.setFullYear(2023);
console.log(data1)