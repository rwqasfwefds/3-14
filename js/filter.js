// filter #1
// filter : 함수의 조건이 참인 결과만 선택해서 새로운 배열을 만듦

// let numbers = [1, 2, 3, 4, 5];

// let reslut = numbers.filter(function(number){
//     return number > 3;
// });
// // 원본 배열
// console.log(numbers);
// // filter로 만들어진 배열
// console.log(reslut);

// filter #2 : 객체
// let guys = [
//     {name : 'YD', money : 500000},
//     {name : 'Bill', money : 400000},
//     {name : 'Andy', money : 300000},
//     {name : 'Roky', money : 200000}
// ];

// let rich = guys.filter(function(man){
//     return man.money > 300000;
// });

// console.log(guys);
// console.log(rich);

// 연습문제 #1
// 아래를 filter를 쓰는 형태로 바꾸셈

// let numbers = [1, 2, 3, 4, 5];
// let reslut = [];

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] < 3){
//         reslut.push(numbers[i]);
//     };
// };

// console.log(reslut);

// 답

// let numbers = [1, 2, 3, 4, 5];

// let n = numbers.filter((number) => number < 3);
// console.log(n)

// 연습문제 #2
// 아래를 filter를 쓰는 형태로 바꾸셈
// let numbers = [1, 2, 3, 4, 5];
// let result = [];

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 2 && numbers[i] < 4){
//         result.push(numbers[i]);
//     };
// };
// console.log(result)

// 답
// let numbers = [1, 2, 3, 4, 5];

// let n = numbers.filter((number) => number > 2 && number < 4);
// console.log(n);

// 연습문제 #3
// 이름이 'YD'인 사람의 money를 뽑아내어 새로운 배열을 생성하고
// 출력 하셈(filter 쓰셈)

// let guys = [
//     {name : 'YD', money : 500000},
//     {name : 'Bill', money : 400000},
//     {name : 'Andy', money : 300000},
//     {name : 'Roky', money : 200000}
// ];

let guys = [
    {name : 'YD', money : 500000},
    {name : 'Bill', money : 400000},
    {name : 'Andy', money : 300000},
    {name : 'Roky', money : 200000}
];

let result = guys.filter((dollar) => dollar.money == 500000);
console.log(result);