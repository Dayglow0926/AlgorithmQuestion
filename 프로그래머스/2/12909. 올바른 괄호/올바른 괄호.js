function solution(s){
    let count = 0;
    s = s.split('');
    for(let v of s){
        if(v === '(') count++;
        else count--;
        
        if(count < 0) return false;
    }

    return count === 0
    
}