function solution(n)
{
    let accE = 1;
    
    while(n !== 1){
        if(n % 2) {
            accE++;
            n = n-1;
        }else{
            n = n / 2;
        }
    }
    
    return accE
}