function solution(nums) {
    var answer = 0;
    //짝수로 맞춰서 배열을 넘겨줌으로 다른작업 없이 반으로만 나눕니다.
    const choice = nums.length/2;
    //중복을 Set을 통해 제거합니다.
    let list = new Set(nums);
    // 선택할 수 있는 개수가 list보다 많을 경우 list 개수를 아니면 choice를 반환한다.
    return choice > list.size ? list.size : choice;
}