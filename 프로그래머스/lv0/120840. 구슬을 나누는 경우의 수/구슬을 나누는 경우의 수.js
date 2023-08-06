const factory = (num) => (num === 0 ? 1 : num * factory(num - 1));

function solution(balls, share) {
    return Math.round(factory(balls) / factory(balls - share) / factory(share))
}

