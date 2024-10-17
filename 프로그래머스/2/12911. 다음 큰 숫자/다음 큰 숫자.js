function solution(n) {
    if(n === 0) return 0;
    
    var answer = n.toString(2);
    const oneLen = answer.replaceAll('0', '').length;
    const lastOne = answer.lastIndexOf('1');
    const plus = Array(answer.length - lastOne).fill(1).fill(0, 1).join('');
    
    const sum = (parseInt(answer, 2) + parseInt(plus, 2)).toString(2);
    const removeOneLen = answer.replaceAll('0', '').length - sum.replaceAll('0', '').length;
    
    return parseInt(Array.from(sum).fill('1', sum.length - removeOneLen).join(''), 2);

    // 2진수 값에서 제일 낮은 1에 1을 더한 후 맨 사라진 1의 개수 만큼 1을 더해준다
}