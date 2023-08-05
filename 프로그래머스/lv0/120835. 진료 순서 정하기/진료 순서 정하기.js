function solution(emergency) {
    let answer = [...emergency];
    
    answer.sort((a,b)=>{
        return b-a;
    });
    
    return emergency.map((v) => answer.indexOf(v)+1);
}