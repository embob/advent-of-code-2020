const data = require('./input');

const values = data.split('\n')

const rows = values.map(a => a.substring(0, 7));
const cols = values.map(a => a.substring(7));

const maxRow = 127;
const maxCol = 7;

function findPosition(string, upperValue) {
  let finalValue;
  for (let i = 0, lower = 0, upper = upperValue; i < string.length; i++) {
    const middle = (upper - lower) / 2;
    string[i] === 'F' || string [i] === 'L' ? upper = Math.floor(upper - middle) : lower = Math.ceil(upper - middle);
    if (lower === upper) finalValue = upper;
  }
  return finalValue;
}

function calcIds(rows, cols) {
  const ids = rows.map((value, index) => (value * 8) + cols[index]);
  ids.sort((a,b)=>b-a);
  return ids;
}

const calculatedRows = rows.map(row => findPosition(row, maxRow));
const calculatedCols = cols.map(col => findPosition(col, maxCol));

const ids = calcIds(calculatedRows, calculatedCols);
const highestId = ids[0];


console.log('the highest seat ID is', highestId);

//console.log(ids);



function missingId(ids) {
	for (let i = 0; i < ids.length - 1; i++) {
		if (ids[i] - ids[i + 1] !== 1) {
      return ids[i] - 1;
    }
	}
}

console.log('my seat id is', missingId(ids));
