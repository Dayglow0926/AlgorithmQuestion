function solution(array) {
    const temp = array.join('');
    return temp.length - temp.replaceAll('7','').length;
}