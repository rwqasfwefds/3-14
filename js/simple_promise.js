let _promise = function(param){
    return new Promise(function(resolve, reject){
        // 3초후에 실행되는 비동기 함수
        setTimeout(function(){
            if(param == true){
                resolve('해결 완료');
            } else {
                reject(Error('실패!'));
            };
        }, 3000);
    });
};

// resolve의 매개변수가 그대로 댄 함수의 매개변수로 넘어옴 왜? 둘 다 똑같이 성공했을때 실행하는 쉨히들이니깐
// then 앞에 있는 펑션은 성공했을때 ','뒤에 있는 놈은 실패 했을때(두번째 펑션 매개변수에는 리젝트의 매개변수가 들어옴)
_promise(true).then(function(text){
    console.log(text);
}, function(error){
    console.log(error)
});

// _promise(true)
// .then(function(text){
//     console.log(text);
// }, function(error){
//     console.log(error)
// });