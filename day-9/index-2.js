
const { readFileSync } = require('fs');
const input = readFileSync('./input.txt').toString()
  .split(/\n/)
  .map(num => Number(num));

// target: 258585477

const createSlice = (arr, target) => arr.splice(0, arr.indexOf(target));

const sumOfEquals = (arr, target) => arr.reduce((prev, curr) => prev + curr, 0) === target;

const createSubArray = (arr, startIndex, arrLength) => [...arr].splice(startIndex, arrLength);

function sumOfMinMax(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] + arr[arr.length - 1];
}

// const betterSumOfMinMax = arr => Math.min(...arr) + Math.max(...arr);

function sumOfInvalidNum(invalidNum, arrayBeforeInvalidNum) {
  for (let i = 2; i < arrayBeforeInvalidNum.length; i++) {
    for (let j = arrayBeforeInvalidNum.length; j >= 0; j--) {
      const sequence = [...arrayBeforeInvalidNum].splice(j, i);
      if (sumOfArrEquals(sequence, invalidNum)) return sumOfMinMax(sequence);
    }
  }
}

function findSum(arr, target) {
  const arrSlice = createSlice(arr, target);
  for (let j = 2; j < arrSlice.length; j++) {
    for (let i = 0; i < arrSlice.length; i++) {
      const slice = createSubArray(arrSlice, i, j);
      if (sumOfEquals(slice, target)) {
        console.log(slice);
        return slice;
      }
    }
  }
}

console.log(sumOfMinMax(findSum(input, 258585477)));
// 36981213
