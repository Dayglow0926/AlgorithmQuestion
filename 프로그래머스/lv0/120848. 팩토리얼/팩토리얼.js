function solution(n) {
    return reverseFactory(n,2);
}

function reverseFactory(n,count){
    const result = Math.floor(n/count);
    return result <= 1 ? count : reverseFactory(result, count+1);
}