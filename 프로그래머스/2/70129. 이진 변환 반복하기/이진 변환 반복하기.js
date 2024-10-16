function solution(s) {
    var answer = [0,0];
    
    while(s!=='1'){
        answer[0]++;
        
        let originLen = s.length;
        s = s.replaceAll('0','')
        
        answer[1] += originLen - s.length;
        
        s = s.length.toString(2);
    }
    
    return answer;
}