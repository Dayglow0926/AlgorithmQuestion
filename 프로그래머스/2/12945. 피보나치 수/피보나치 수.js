function solution(n) {
    const answer = [0, 1];
    let count = 1;
    
    while(!answer[n]){
        answer.push((answer[count-1] + answer[count]) % 1234567);
        count ++;
    }

    return answer[n];
}
