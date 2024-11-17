function solution(n, words) {
    var answer = [0,0];
    let speak = [];
    let round = 1;
    
    for(let i=0; i< words.length; i+= n){
        for(let j=i; j<i+n; j++){
            if(!words[j]) break;
            
            if(speak.length === 0){
                speak.push(words[j]);
            }else{
                // console.log(speak[speak.length-1].slice(-1), words[j].slice(0,1))
                // console.log(speak, words[j], speak.indexOf(words[j]));
                if(speak.indexOf(words[j]) > -1){
                    return [j%n + 1,round]
                }
                
                console.log(speak[speak.length-1].slice(-1), words[j].slice(0,1), j, n);
                
                if(speak[speak.length-1].slice(-1) === words[j].slice(0,1)){
                    speak.push(words[j]);
                }else{
                    return [j%n + 1,round]
                }
            }
        }
        round ++;
    }

    return answer;
}