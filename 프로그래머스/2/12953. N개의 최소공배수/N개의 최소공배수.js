
function gcd(a,b){
    if(a % b === 0){
        return b;
    }else{
        return gcd(b, a%b);
    }
}

function lcm(a,b){
    return a * b / gcd(a,b)
}

function solution(arr){
  let answer = lcm(arr[0], arr[1]);
    
    for(let i=2; i<arr.length; i++){
        answer = lcm(answer, arr[i]);
    }
    
  return answer;
};