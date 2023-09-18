function solution(quiz) {
    return quiz.map((v) => {
        v = v.split(" = ")
        
        if(eval(v[0]) === Number(v[1])){
            return "O";
        }else{
            return "X";
        }
    });
}