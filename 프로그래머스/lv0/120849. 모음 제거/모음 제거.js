function solution(my_string) {
    const removeList = ['a','e','i','o','u'];
    
    return my_string.split('').map((str) => {
        return removeList.indexOf(str) > -1 ? '' : str
    }).join('');
}