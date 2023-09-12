function solution(s) {
    let preNumber = 0;
    
    return s.split(' ').reduce((acc, cur)=>{
        if(cur === 'Z') return acc - preNumber;
        preNumber = Number(cur);
        return acc + preNumber;
    },0);
}