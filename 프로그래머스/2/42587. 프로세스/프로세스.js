function solution(priorities, location) {
    var answer = 1;
    const prioritiesTemp = [...priorities];
    priorities.sort((a,b) => b-a);
    
    while(true){
        if ( prioritiesTemp[0] === priorities[0] ) {
            if(location === 0) return answer;
            prioritiesTemp.shift();
            priorities.shift();
            answer++;
            location--;
        }else{
            prioritiesTemp.push(prioritiesTemp.shift());
            if(location === 0) location = prioritiesTemp.length-1;
            else location--;
        }
    } 
    return answer;
}