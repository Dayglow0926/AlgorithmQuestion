const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

let pattern = input[1];

for (let i = 2; i < input.length; i++) {
  let patternCheck = '';
  const str = input[i];

  for (let j = 0; j < pattern.length; j++) {
    const char = pattern[j];
    if (char === str[j]) patternCheck += char;
    else patternCheck += '?';
  }

  pattern = patternCheck;
}

console.log(pattern);
