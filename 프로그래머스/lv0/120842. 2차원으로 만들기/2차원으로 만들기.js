function solution(num_list, n) {
    var answer = [];
    
    for(let i=n; i<=num_list.length; i=i+n){
        answer.push(num_list.slice(i-n, i));
    }
    
    return answer;
}