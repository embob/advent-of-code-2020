const slope = require('./input');

const rows = slope.length;
const repeatAmount = Math.ceil((rows * 3) / slope[0].length);
var repeatedRows = a => [].concat(...new Array(repeatAmount).fill(a));
const extendedSlope = slope.map(r => repeatedRows(r));

let trees = 0;

for (let row = 1, horizontalMove = 3; row < rows; row++, horizontalMove += 3) {
  if (extendedSlope[row][horizontalMove] === '#') {
    trees += 1;
  }
}

console.log(trees);
