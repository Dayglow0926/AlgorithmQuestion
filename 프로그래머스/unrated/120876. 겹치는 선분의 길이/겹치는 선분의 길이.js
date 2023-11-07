function solution(lines) {
  var answer = 0;
  let lineMap = new Array(200);  
  lineMap.fill(0);

  for (let i = 0; i < 3; i++) {
    let left = lines[i][0];
    let right = lines[i][1];

    for (let j = left; j < right; j++) {
      lineMap[j + 100] += 1;
    }
  }

lineMap = lineMap.filter((v) => v > 1)
    
  return lineMap.length;
}