function solution(s) {
    let minMax = s.split(' ').sort((a,b) => +a - +b);
    return minMax[0]+' '+minMax[minMax.length -1];
}