function solution(s) {
    let arr = s.split(' ').map((v) => 
        v.charAt(0).toUpperCase()
        +v.substring(1).toLowerCase()
    )
    return arr.join(' ');
}