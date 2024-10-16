function solution(s) {
    let arr = s.split(' ').map((v) => {
        const wordArr = v.toLowerCase().split('');
        
        try{
            wordArr[0] = wordArr[0].toUpperCase();   
        }catch(e){
        }finally{
            return wordArr.join('')
        }
    })
    return arr.join(' ');
}