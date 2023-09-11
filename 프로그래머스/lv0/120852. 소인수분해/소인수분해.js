function solution(n) {
    let decimal = 2;
    var answer = [];
    
    while(n>=2){
        if(n%decimal === 0){
            answer.push(decimal);
            n/=decimal;
        }else{
            decimal++;
        }
    }
    
    return [...new Set(answer)];
}