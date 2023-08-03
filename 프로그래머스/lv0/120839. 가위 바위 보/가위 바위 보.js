
function solution(rsp) {
    return rsp.split('').reduce((acc, cur) => { 
        switch(cur){
            case '2' : return acc+'0';
            case '0' : return acc+'5';
            case '5' : return acc+'2';
        }
    },'');
}