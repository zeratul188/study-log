function solution(n) {
    return '수박'.repeat(n/2+1).slice(0, n);
}

//ex
const n1 = 3, n2 = 4;
console.log(solution(n1));
console.log(solution(n2));