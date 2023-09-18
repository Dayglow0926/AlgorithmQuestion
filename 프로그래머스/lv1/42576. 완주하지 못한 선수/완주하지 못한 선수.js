function solution(participant, completion) {
    let obj = {}
    
    participant.forEach((v) => {
        if(obj[v] === undefined) obj[v] = 1;
        else obj[v]++;
    });
    
    completion.forEach((v) => {
        obj[v]--;
        if(obj[v] === 0) delete obj[v];
    })
    
    return Object.keys(obj)[0]
}