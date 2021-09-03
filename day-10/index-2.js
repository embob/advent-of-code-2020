const data = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`.split(/\n/)
  .map(Number)
  .sort((a, b) => a - b);

console.log(data);

const { readFileSync } = require('fs');
const input = readFileSync('./input.txt').toString()
  .split(/\n/)
  .map(Number)
  .sort((a, b) => a - b);

  // (0), 1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19, (22)
  // (0), 1, 4, 5, 6, 7, 10, 12, 15, 16, 19, (22)    - 11
  // (0), 1, 4, 5, 7, 10, 12, 15, 16, 19, (22)       - 11, 6
  // (0), 1, 4, 6, 7, 10, 12, 15, 16, 19, (22)       - 11, 5
  // (0), 1, 4, 7, 10, 12, 15, 16, 19, (22)          - 11, 6, 5
  // (0), 1, 4, 5, 7, 10, 11, 12, 15, 16, 19, (22)   - 6
  // (0), 1, 4, 7, 10, 11, 12, 15, 16, 19, (22)      - 6, 5
  // (0), 1, 4, 6, 7, 10, 11, 12, 15, 16, 19, (22)   - 5

  /*
    1. cannot remove when there is a difference of 3
    2. gap of 1 we can remove apart from 0 to 1
    3. we cannot remove the second to last number
    numbers that can be removed - 5, 6, 11
    numbers that are kept - 1, 4, 7, 10, 12, 15, 16, 19
  */

function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

// const gapsOfOneEachSide = (input, prev, middle, next) => ;

function findTotalOfNumbersWithGapOfOneEachSide(input) {
  const gapsOfOne = []
  for (let prev = 0, middle = 1, next = 2; prev < input.length - 2; prev++, middle++, next++) {
    if (input[middle] - input[prev] === 1 && input[next] - input[middle] === 1) gapsOfOne.push(input[middle]);
  }
  return gapsOfOne;
}

console.log(findTotalOfNumbersWithGapOfOneEachSide(data));

function comboCount(arrayLength, comboLength) {
  return Math.round(factorialize(arrayLength) / (factorialize(comboLength) * factorialize(arrayLength - comboLength)));
}

function findCombos(arrLength) {
  const arrayOfComboTotals = [1];
  for (let i = arrLength; i >= 0; i--) {
    console.log('i', i, 'combocount', comboCount(arrLength, i));
    arrayOfComboTotals.push(comboCount(arrLength, i));
  }
  return arrayOfComboTotals;
}

const sumOfComboTotals = (arr) => arr.reduce((prev, curr) => prev + curr);

console.log(sumOfComboTotals(findCombos(14)));

