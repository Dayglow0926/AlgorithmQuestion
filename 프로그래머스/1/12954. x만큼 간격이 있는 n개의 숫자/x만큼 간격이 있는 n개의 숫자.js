function solution(x, n) {
    var answer = [];
    let sum=x;
    for(let i=0; i<n; i++){
        answer.push(sum);
        sum+=x;
    }
    return answer;
}