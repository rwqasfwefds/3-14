// 동기 프로그램
// 믈간 값 계산 함수
// return : 총 물건 값
function buy_normal(item, price, quantity){
    // 첫 번째 출력
    console.log(item + ' 상품을' + quantity + '개 골라서 점원에게 주었습니다.');
    // 두 번째 출력
    console.log('계산이 필요합니다.');
    // 물건 값
    let total = price * quantity
    return total;
}
// 물건을 지불하는 함수
function pay(tot){
    // 세 번째 출력
    console.log(tot + '원을 지불하였습니다.');
}

let result = buy_normal('고구마', 1000, 5);
pay(result);