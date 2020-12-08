const slope = require('./input');

function howManyTrees(right, down = 1) {
  const slopeLength = slope.length;
  const repeatAmount = Math.ceil((slopeLength * right) / slope[0].length);
  const repeatedRows = a => [].concat(...new Array(repeatAmount).fill(a));
  const extendedSlope = slope.map(r => repeatedRows(r));

  let trees = 0;

  for (let row = down, horizontalMove = right; row < slopeLength; row += down, horizontalMove += right) {
    if (extendedSlope[row][horizontalMove] === '#') {
      trees += 1;
    }
  }
  return trees;
}

const arrayOfTrees = [howManyTrees(1), howManyTrees(3), howManyTrees(5), howManyTrees(7), howManyTrees(1, 2)];

console.log(arrayOfTrees.reduce((prev, curr) => prev * curr));
