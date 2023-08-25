function solution(numbers, k) {
    const target = (k-1)*2;
    return numbers[target%numbers.length];
}
