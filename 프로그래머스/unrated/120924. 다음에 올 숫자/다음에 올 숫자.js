function solution(common) {
    var answer = 0;
    
    //등비인지 등차인지 체크;
    if(common[1] - common[0] === common[2] - common[1]){
        //등차
        answer = common.pop() + common[1] - common[0];
    }else{
        //등비
        answer = common.pop() * (common[1]/common[0]);
    }
    
    return answer;
}