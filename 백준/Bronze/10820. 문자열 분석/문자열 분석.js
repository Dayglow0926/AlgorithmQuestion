const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .split('\n');

for (let str of input) {
  if (str === '') continue;

  const count = [0, 0, 0, 0];
  for (let char of str) {
    if (char >= 'a' && char <= 'z') count[0]++;
    else if (char >= 'A' && char <= 'Z') count[1]++;
    else if (char >= '0' && char <= '9') count[2]++;
    else if (char === ' ') count[3]++;
  }
  console.log(count.join(' '));
}
