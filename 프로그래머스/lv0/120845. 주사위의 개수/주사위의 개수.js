function solution(box, n) {
    return box.reduce((cur, next) => cur * Math.floor(next/n) , 1)
}