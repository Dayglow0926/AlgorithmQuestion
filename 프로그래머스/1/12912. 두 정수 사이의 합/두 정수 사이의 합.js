function solution(a, b) {
    var answer = 0;
    let min = a >= b ? b: a;
    let max = a >= b ? a: b;
    
    for(let i = min; i<=max; i++){
        answer += i;
    }
    
    return answer;
}