const strNumbers = ["zero","one","two","three","four","five","six","seven", "eight","nine"]

function solution(numbers) {
    strNumbers.forEach((v,i) => {
        numbers=numbers.replaceAll(v,i)
    })
    return Number(numbers);
}