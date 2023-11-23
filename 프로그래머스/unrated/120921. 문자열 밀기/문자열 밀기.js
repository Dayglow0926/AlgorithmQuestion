function solution(A, B) {
    var answer = 0;
    
    while(A != B && answer<A.length){
        answer ++;
        
        A = A.split('');
        
        const popStr = A.pop();
        A = [popStr, ...A]
        
        A = A.join('');
    }
    
    return A != B ? -1 : answer;
}