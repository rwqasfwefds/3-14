// 연습문제 #1
// 아래 형태를 map를 사용하는 형태로 출력하셈

// let numbers = ['가', '나', '다'];
// let result = [];

// for(let i = 0; i < numbers.length; i++){
//     result[i] = numbers[i] + ' 붙임'
// };

// console.log(result)

// 답
// let numbers = ['가', '나', '다'];

// let result = numbers.map((number) => number + ' 붙임');
// console.log(result);

// 연슴문제 #2
// 아래 형태를 map를 사용해서 이름만 가지고 있는 배열을 출력하셈

// let members = [
//     {name: 'YD', age: 22},
//     {name: 'Bill', age: 32},
//     {name: 'Andy', age: 21},
//     {name: 'Roky', age: 35},
// ];

// 답
let members = [
    {name: 'YD', age: 22},
    {name: 'Bill', age: 32},
    {name: 'Andy', age: 21},
    {name: 'Roky', age: 35},
];

let reslut = members.map((name) => name.name);
console.log(reslut)