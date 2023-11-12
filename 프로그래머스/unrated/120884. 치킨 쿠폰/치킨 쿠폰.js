function solution(chicken) {
    var answer = 0;
    
    while(chicken >= 10 ){
        let couponChicken= Math.floor(chicken/10);
        console.log(couponChicken);
        answer += couponChicken;
        chicken = couponChicken + chicken%10;
    }
    
    return answer;
}