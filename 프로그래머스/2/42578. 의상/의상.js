function solution(clothes) {
    const user = {}
    let answer = 1;
    
    clothes.forEach((v) => {
        if(user[v[1]] === undefined) user[v[1]] = 1;
        user[v[1]]++;
    })
    
    return Object.keys(user).reduce((acc, key) => {
        return acc*user[key];
    },1) - 1;
}