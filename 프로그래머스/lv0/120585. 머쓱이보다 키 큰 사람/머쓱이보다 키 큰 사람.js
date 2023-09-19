function solution(array, height) {
    var answer = 0;
    for(let i=0; i<array.length; i++){
        console.log(i,array[i])
        if(array[i]>height) ++answer;
    }
    return answer;
}