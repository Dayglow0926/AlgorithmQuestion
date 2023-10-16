function solution(my_string) {
    var regex = /\d+/g;
    var found = my_string.match(regex);
    
    if(!found) return 0;
    
    return found.reduce((acc, cur) => Number(acc)+Number(cur) ,0);
}