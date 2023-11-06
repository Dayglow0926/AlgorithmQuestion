  function calculation(a, b, c, d) {
    let abDiff, cdDiff;

    abDiff = (b[1] - a[1]) / (b[0] - a[0]);
    cdDiff = (d[1] - c[1]) / (d[0] - c[0]);

    if (abDiff === cdDiff) {
      return 1;
    }
      return 0;
  }

function solution(dots) {
  var answer = 0;

  answer += calculation(dots[0], dots[1], dots[2], dots[3]);
  answer += calculation(dots[0], dots[2], dots[1], dots[3]);
  answer += calculation(dots[0], dots[3], dots[1], dots[2]);

  return answer > 0 ? 1 : 0;
}