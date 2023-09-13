function solution(cipher, code) {
    let answer = '';
    cipher = cipher.split('');
    for(let i = code; i<=cipher.length; i+=code){
        answer += cipher[i-1];
    }
    
    return answer;
}