function solution(my_string) {
    return my_string.split('').map((v)=>{
        let check = v.toUpperCase()
        if(v === check){
            return v.toLowerCase();
        }
        return check;
    }).join('');
}