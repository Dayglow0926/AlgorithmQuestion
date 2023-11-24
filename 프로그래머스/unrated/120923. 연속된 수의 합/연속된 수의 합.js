function solution(num, total) {
    let answer = [];
    // 중앙값 알아내기
    const centerNum = Math.floor(total/num);
    // 중앙 위치
    const centerLocation = Math.ceil(num/2);
    for(let i = 1; num>=i; i++){
        answer.push(centerNum-centerLocation+i);
    }
    
    return answer;
}