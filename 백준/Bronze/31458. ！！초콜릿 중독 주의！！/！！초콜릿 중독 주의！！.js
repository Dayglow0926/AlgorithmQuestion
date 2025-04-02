const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .split('\n');

const length = input[0];

for (let i = 1; length >= i; i++) {
  let [_, left, num, right] = input[i].trim().match(/^(!*)([01])(!*)$/);

  if (right.length > 0) num = 1;

  if (left.length % 2 === 1) {
    if (Number(num) === 1) num = 0;
    else num = 1;
  }
  console.log(num);
}
