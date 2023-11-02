function solution(n) {
    
    for(let i=1; i<=n; i++){
        if(i % 3 === 0 || new String(i).indexOf('3')>-1) n++;
    }
    
    return n;
}