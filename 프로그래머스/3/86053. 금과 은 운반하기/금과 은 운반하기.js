function search(a, b, g, s, w, t, mid) {
    let totalGold = 0;
    let totalSilver = 0;
    let totalMineral = 0;

    for (let i = 0; i < g.length; i++) {
        const time = t[i];
        const roundTime = time * 2;
        let moveCnt = Math.floor(mid / roundTime);
        if (mid % roundTime >= time) moveCnt++;

        const maxTake = w[i] * moveCnt;

        totalGold += Math.min(g[i], maxTake);
        totalSilver += Math.min(s[i], maxTake);
        totalMineral += Math.min(g[i] + s[i], maxTake);
    }

    return totalGold >= a && totalSilver >= b && totalMineral >= (a + b);
}

function solution(a, b, g, s, w, t) {
    let start = 0;
    let end = 10e14 * 3;
    let answer = end;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (search(a, b, g, s, w, t, mid)) {
            answer = Math.min(answer, mid);
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return answer;
}