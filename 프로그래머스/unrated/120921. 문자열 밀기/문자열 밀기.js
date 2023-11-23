function solution(A, B) {
    var answer = 0;
    
    while(A != B && answer<A.length){
        answer ++;
        
        A = A.split('');
        
        A = [A.pop(), ...A]
        
        A = A.join('');
    }
    
    return A != B ? -1 : answer;
}