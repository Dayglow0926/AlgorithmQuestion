function apply(a, b, g, s, w, t, mid){
    let totalGold = 0;
    let totalSilver = 0;    
    let totalMineral = 0;    
    
    for(let i = 0; i < g.length; i++){
        const time = t[i];
        
        const roundTime = time * 2;
        let moveCount = parseInt(mid / roundTime); 
        if(mid % roundTime >= time) moveCount++;
        const maxTake = w[i] * moveCount;
        
        totalGold += Math.min(g[i], maxTake);
        totalSilver += Math.min(s[i], maxTake);
        totalMineral += Math.min(g[i] + s[i], maxTake);
    }
    
    if(totalGold >=a && totalSilver>=b && totalMineral>=(a+b)) {
        return true;
    }
    
    return false
    
}

function solution(a, b, g, s, w, t) {
    let startTime = 1;
    let endTime = 10e14*3;
    let answer = endTime;
    
    while(startTime <= endTime){
        
        const mid = parseInt((startTime + endTime) / 2);
        
        if(apply(a, b, g, s, w, t, mid)){
            answer = Math.min(answer, mid);
            endTime = mid - 1;
        }else {
            startTime = mid + 1
        }
    }
    
    return answer;
}