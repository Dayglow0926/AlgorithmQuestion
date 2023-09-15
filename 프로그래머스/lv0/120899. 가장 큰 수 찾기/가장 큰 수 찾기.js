function solution(array) {
    let temp = [...array];
    return [array.sort((a,b) => b-a)[0], temp.indexOf(array[0]) ];
}