//해시 문제 key-value를 활용하여 문제풀이
function solution(participant, completion) {
    let obj = {}
    
    //참여한 선수 명단을 obj key 로 등록 및 count
    participant.forEach((v) => {
        if(obj[v] === undefined) obj[v] = 1;
        else obj[v]++;
    });
    
    //완주한 선수를 명단에서 제외
    completion.forEach((v) => {
        obj[v]--;
        if(obj[v] === 0) delete obj[v];
    })
    
    //나머지 완주하지 못한 선수 출력
    return Object.keys(obj)[0]
}