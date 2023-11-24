function solution(common) {
    var answer = 0;
    //등비인지 등차인지 체크 등차 0 등비는 1 ;
    const check = common[1] - common[0] === common[2] - common[1] ? 0 : 1

    if(check === 0){
        //등차
        answer = common[common.length-1] + common[1] - common[0];
    }else{
        //등비
        answer = common[common.length-1] * (common[1]/common[0]);
    }
    
    return answer;
}