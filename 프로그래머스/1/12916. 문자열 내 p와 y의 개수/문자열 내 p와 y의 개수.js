function solution(s){
    s = s.toLowerCase();
    const pLen = s.length - s.replaceAll('p','').length
    const yLen = s.length - s.replaceAll('y','').length

    return pLen === yLen;
}