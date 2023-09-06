function solution(n) {
    let count = 1;
    
    for(let i=1; i<=n; i = i*count){
        count++;
    }
    
    return count-1
}