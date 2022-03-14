// 비동기 프로그램
// 믈간 값 계산 함수
// return : 총 물건 값

// 잘못 된 예제
// function buy_asis(item, price, quantity){
//     // 첫 번째 출력
//     console.log(item + ' 상품을' + quantity + '개 골라서 점원에게 주었습니다.');

//     // 비동기 부분
//     setTimeout(function(){
//         // 세번째 출력
//         console.log('계산이 필요합니다.');
//         // 물건 값
//         let total = price * quantity
//         return total;
//     }, 2000);
// }
// // 물건을 지불하는 함수
// function pay(tot){
//     // 두 번째 출력
//     console.log(tot + '원을 지불하였습니다.');
// }

// let result = buy_asis('고구마', 1000, 5);
// pay(result);

// 위에 있는 쉨히 고친 거
// 매개변수에 있는 callback 자체가 함수
function buy_asis(item, price, quantity, callback){
    // 첫 번째 실행
    console.log(item + ' 상품을' + quantity + '개 골라서 점원에게 주었습니다.');

    // 비동기 방식으로 동작하는 부분
    setTimeout(function(){
        // 첫 번째 로직
        // 두 번째 실행
        console.log('계산이 필요합니다.');
        // 물건 값
        let total = price * quantity
        // 두 번째 로직
        // 함수가 들어올 자리
        callback(total);
    }, 2000);
}
// 물건을 지불하는 함수
function pay(tot){
    // 세 번째 실행
    console.log(tot + '원을 지불하였습니다.');
}

let result = buy_asis('고구마', 1000, 5, pay);
pay(result);

// 다른 경우 

// function buy_asis(item, price, quantity, callback){
//     console.log(item + ' 상품을' + quantity + '개 골라서 점원에게 주었습니다.');

//     // 비동기 방식으로 동작하는 부분
//     setTimeout(function(){
//         // 첫 번째 로직
//         console.log('계산이 필요합니다.');
//         // 물건 값
//         let total = price * quantity
//         // 두 번째 로직
//         // 함수가 들어올 자리
//         callback(total);
//     }, 2000);
// }
// // 물건을 지불하는 함수
// function pay(tot){
//     console.log(tot);
//     payString();
// }

// function payString(){
//     console.log('원을 지불하였습니다.');
// }

// let result = buy_asis('고구마', 1000, 5, pay);
// pay(result);