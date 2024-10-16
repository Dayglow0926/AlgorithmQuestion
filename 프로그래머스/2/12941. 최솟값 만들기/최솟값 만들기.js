function solution(A,B){
    A = A.sort((a,b) => a-b);
    B = B.sort((a,b) => b-a);

    return A.map((v,i) => v*B[i]).reduce((acc, cur) => acc + cur ,0);
}