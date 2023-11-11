function solution(score) {
    var answer = [];

    answer = score.map((v) => v[0]+v[1]);
    avg = score.map((v) => v[0]+v[1]).sort((a,b) => b-a);
    
    let temp = -1;
    let result = Array.from({length: score.length}, () => 0);
    avg.forEach((v, i) => {
        if(v !== temp) {
            answer = answer.map((value, index) => {
                if(v === value) result[index] = i+1;
                return value;
            });
            temp = v;
        };
    })
    
    return result;
}