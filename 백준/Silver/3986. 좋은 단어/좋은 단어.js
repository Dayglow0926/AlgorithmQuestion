const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .split('\n');

const n = Number(input[0]);
let goodWordCount = 0;

for (let i = 1; i <= n; i++) {
  const stack = [];
  for (const ch of input[i]) {
    if (stack.length && stack[stack.length - 1] === ch) {
      stack.pop(); // 같은 글자면 짝지어 제거
    } else {
      stack.push(ch); // 아니면 스택에 넣기
    }
  }
  if (stack.length === 0) goodWordCount++;
}

console.log(goodWordCount);
