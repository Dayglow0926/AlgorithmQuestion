function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    //다리를 모방한 큐
    let onTheBridge = [];
    for(let i=0; i<truck_weights.length; ){
        //시간초
        answer++;
        
        //현재 다리위에 트럭이 bridge_length의 길이만큼 늘어나 있다면 지나간 것으로 판단합니다.
        if(onTheBridge.length === bridge_length){
            onTheBridge.shift();
        }
        
        //bridge_length보다 적고 weight가 추가되도 괜찮다면 다리위에 올립니다.
        //그럴수 없다면 아무것도 올리지 않고 빈값을 추가해 트럭을 앞으로 보냅니다.
        if(onTheBridge.length<bridge_length 
           && onTheBridge.reduce((a,b) => a+b, 0) + truck_weights[i] <= weight) {
            onTheBridge.push(truck_weights[i]);
            i++;
        }else{
            onTheBridge.push(0);
        }
    }
    
    //마지막에 들어간 트럭은 다리 길이만큼 이동해야함으로 결과값에 다리 길이를 더합니다.
    return answer+bridge_length;
}