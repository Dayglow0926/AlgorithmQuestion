function solution(diffs, times, limit) {
    
    let max = 100000, min = 1;
    let mid = null;
    let answer = max;
    
    while(min<=max){
        mid = Math.floor((min+max)/2);
        
        let spendTime = 0, over = false
        
        for(let i in diffs){
            if(mid < diffs[i]){
                spendTime = spendTime + (diffs[i]-mid)*(times[i]+times[i-1]) + times[i]
            }else{
                spendTime+= times[i]
            }
            
            if(limit<spendTime){
                over = true
                break;
            }
        }
        
        
        if(over){
           min = mid + 1
        }else{
           answer = mid 
           max = mid -1 
        }
    }
    
    return answer;
}