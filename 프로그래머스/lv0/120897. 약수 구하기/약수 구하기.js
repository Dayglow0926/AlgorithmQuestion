function solution(n) {
    var answer = [];
    
    for(let i=1; n/2>=i; i++){
        if(n%i === 0) answer.push(i);
    }
    answer.push(n);
    
    return answer;
}