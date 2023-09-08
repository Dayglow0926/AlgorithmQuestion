function solution(my_string) {
return my_string.split('').filter((v) => {if(v>=0 && v<=9) {return true} else return false;}).map((v) => Number(v)).sort((a,b)=>{return a-b;})
}