function solution(n) {
    const answer = n-1;
    
    for(let i=2; answer/2 >= i; i++){
        if(answer % i === 0){
            return i;
        }
    }
    
    return answer;
}