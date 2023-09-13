function solution(array, n) {
    array.push(n);
    array.sort((a,b)=> a-b);
    
    const i = array.indexOf(n);
    
    if(i === 0) return array[i+1];
    else if(i === array.length-1) return array[i-1];
    
    return array[i]-array[i-1] > array[i+1]-array[i] ? array[i+1] : array[i-1];
}