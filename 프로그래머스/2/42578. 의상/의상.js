function solution(clothes) {
    const user = {}
    let answer = 1;
    clothes.forEach((v) => {
        if(user[v[1]] === undefined) user[v[1]] = 1;
        user[v[1]]++;
    })
    
    Object.keys(user).forEach((v) => {
        answer *= user[v];
    })
    return answer - 1;
}