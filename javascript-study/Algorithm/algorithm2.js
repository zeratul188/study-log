/*
    가운데 글자 가져오기
*/

function solution(s) {
    var result = s.substr(Math.ceil(s.length/2)-1, s.length%2 === 0 ? 2 : 1);
    return result;
}

//ex1
const s1 = "abcde";
//result : 'c'
console.log(solution(s1));

const s2 = "qwer";
//result : 'we'
console.log(solution(s2));

