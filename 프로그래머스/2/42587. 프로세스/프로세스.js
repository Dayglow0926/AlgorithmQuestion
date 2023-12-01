function solution(priorities, location) {
    var answer = 1;
    
    while(true){
        const temp = priorities.shift();
        if (priorities.some(v => v > temp)) {
            priorities.push(temp);
            if(location === 0) location = priorities.length-1;
            else location--;
        }else{
            if(location === 0) return answer;
            answer++;
            location--;
        }
    } 
    
    return answer;
}