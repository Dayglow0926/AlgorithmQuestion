function solution(i, j, k) {
    var answer = '';
    
    for(i; i<=j; i++){
        answer += i;
    }
    
    return answer.split('').filter((v) => v == k).length;
}