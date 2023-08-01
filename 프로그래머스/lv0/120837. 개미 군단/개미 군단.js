function solution(hp) {
    let count = 0;
    
    count += Math.floor(hp/5);
    hp %= 5;
    count += Math.floor(hp/3);
    hp %= 3;
    count += Math.floor(hp/1);
    
    return count;
}