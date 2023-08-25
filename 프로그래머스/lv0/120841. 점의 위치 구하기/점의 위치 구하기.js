function solution(dot) {
    return dot[0] > -1 ? dot[1] > -1 ? 1 : 4 : dot[1] > -1 ? 2 : 3
}