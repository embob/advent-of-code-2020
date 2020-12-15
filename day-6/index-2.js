const data = require('./input');

const groups = data
  .split('\n\n') // remove 2 line gaps and each chunk in an array
  .map(a => a.replace(/\n/g, ' ').split(' '));

const calculation = [];

for (let i = 0; i < groups.length; i++) {
  groups[i].length === 1 ? calculation.push(groups[i][0].length) : calculation.push(findDupes(groups[i]));
}

function findDupes(array) {
  let counts = 0;
  for (let i = 0; i < array[0].length; i++) {
    let count = 1;
    for (let j = 1; j < array.length; j++) {
      const letter = array[0][i];
      const exists = array[j].includes(letter);
      if (exists) count += 1;
    }
    if (count === array.length) counts += 1;
  }
  return counts;
}

function addArray(array) {
  return array.reduce((acc, item) => acc + item, 0);
}

console.log(addArray(calculation));
// 3197
