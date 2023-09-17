function solution(num, k) {
    const answer = num.toString().indexOf(k+'');
    return answer === -1 ? -1 : answer+1
}