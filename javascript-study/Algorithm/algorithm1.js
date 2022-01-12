/*
    김서방 찾기
*/

function solution(seoul) {
    const position = seoul.indexOf('Kim');
    return '김서방은 '+position+"에 있다";
}

//ex1
var seoul = ["Jane", "Kim"];
//result : "김서방은 1에 있다"

console.log(solution(seoul));