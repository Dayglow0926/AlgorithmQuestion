function solution(my_string) {
    var answer = [];
    my_string.split('').forEach((v)=> {
        if(answer.indexOf(v)<0){
            answer.push(v)
        }
    })
    return answer.join('');
}