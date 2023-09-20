function maxCheck(board, max){
    if(board[0] > max[0]) board[0] = max[0];
    else if(board[0] < -max[0]) board[0] = -max[0]
    
    if(board[1] > max[1]) board[1] = max[1];
    else if(board[1] < -max[1]) board[1] = -max[1]
}

function solution(keyinput, board) {
    var answer = [0,0];
    let max = [Math.floor(board[0]/2),Math.floor(board[1]/2)];
    
    keyinput.forEach((v) => {
        switch(v){
            case "left" : answer[0]--;
                break;
            case "right" : answer[0]++;
                break;
            case "up" : answer[1]++;
                break;
            case "down" : answer[1]--;
                break;
        }
        
        maxCheck(answer, max)
        
    })
    
    return answer;
}