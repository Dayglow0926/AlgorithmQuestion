function solution(n) {
    let answer = 0;
    let value = n;
    
    while(value){
        if(!(n%value)) answer += value;
        
        value--;
    }
    
    return answer;
}