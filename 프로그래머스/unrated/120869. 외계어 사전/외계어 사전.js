function solution(spell, dic) {
    
    for(let i=0; i<dic.length; i++){
        let count = 0;
        spell.forEach((v) => {
            if( dic[i].indexOf(v) > -1 ) count ++;
        })
        if(count == spell.length) return 1
    }
    return 2;
}