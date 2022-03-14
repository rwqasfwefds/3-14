let wait = (inputStr, callback) => {
    // 비동기 프로그래밍 부분
    // 콜백을 이용한 부분
    setTimeout(() => {
        console.log(inputStr);
        callback();
    }, 1000);
};

// wait 함수 호출
// 1초후에 실행되는 콜백함수들
// 콜백 지옥으로 프로그래밍 됨
wait('A', () => {
    wait('B', () => {
        wait('C', () => {
            return;
        });
    });
});