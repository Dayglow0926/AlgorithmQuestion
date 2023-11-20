function solution(i, j, k) {
    var answer = 0;
    
    for(let s=i; s<=j; s++){
        let check = s.toString().split('').filter((v) => v == k);
        answer += check.length;
    }
    
    return answer;
}