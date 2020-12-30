const { readFileSync } = require('fs');
const input = readFileSync('./input.txt').toString()
  .split(/\n/)
  .map(num => Number(num));

const sortByNumerical = arr => arr.sort((a, b) => a - b);

const addZeroToStart = arr => arr.unshift(0);

const addDeviceAdaptor = arr => arr.push(Math.max(...arr) + 3);

const adaptorsArray = arr => {
  addZeroToStart(arr);
  addDeviceAdaptor(arr);
  sortByNumerical(arr);
  return arr;
}

function calculateDifferences(arr) {
  const gapsArray = [];
  for (let i = 0, j = 1; i < arr.length - 1; i++, j++) {
    gapsArray.push(arr[j] - arr[i]);
  }
  return gapsArray;
}

const differencesBetweenAdaptors = calculateDifferences(adaptorsArray(input));

const countOccurrences = (arr, number) => arr.filter(num => num === number).length;

function sumOfDifferenceTotals() {
  return countOccurrences(differencesBetweenAdaptors, 1) * countOccurrences(differencesBetweenAdaptors, 3);
}

console.log(sumOfDifferenceTotals());
// 2516
