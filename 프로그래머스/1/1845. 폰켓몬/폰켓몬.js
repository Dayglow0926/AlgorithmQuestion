function solution(nums) {
    var answer = 0;
    const choice = nums.length/2;
    let list = new Set(nums);

    return choice > list.size ? list.size : choice;
}