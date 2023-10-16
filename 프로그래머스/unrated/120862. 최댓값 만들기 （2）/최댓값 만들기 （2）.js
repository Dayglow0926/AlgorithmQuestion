function solution(numbers) {
    const minus = numbers.filter((v) => v < 0).sort((a,b) => a-b);
    const plus = numbers.filter((v) => v >= 0).sort((a,b) => b-a);
    let result = 0;
    
    if(minus.length > 1){
        result = minus[0] * minus[1];
    }else if(minus.length == plus.length){
        return minus[0] * plus[0]
    }
    
    if(plus.length < 2) {
        return result;
    }
    
    return result >= plus[0] * plus[1] ? result : plus[0] * plus[1];
    
}