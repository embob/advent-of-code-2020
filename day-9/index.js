const { readFileSync } = require('fs');
const input = readFileSync('./input.txt').toString()
  .split(/\n/)
  .map(num => Number(num));

function checkSum(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`${arr[i]} + ${arr[j]} == ${arr[i] + arr[j]}`);
      if (arr[i] + arr[j] === num) return true;
    }
  }
  return false;
}

const preambleLength = 25;
function findSums() {
  for (let i = preambleLength; i < input.length; i++) {
    const preamble = input.slice(i - preambleLength, i);
    const valToCheck = input[i];
    if (!checkSum(preamble, valToCheck)) return valToCheck;
  }
}

console.log(findSums());
