function solution(order) {
    let answer = 0;
    const threeSixNine = ['3','6','9'];
    order.toString().split('').forEach((v)=>{
        if(threeSixNine.indexOf(v)>-1){
            answer++;
        }
    });
    return answer;
}