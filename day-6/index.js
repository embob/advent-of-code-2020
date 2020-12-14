const data = require('./input');

const groups = data
  .split('\n\n') // remove 2 line gaps and each chunk in an array
  .map(a => a.replace(/\n/g, '').split(''))
  .map(items => items.filter((item, index) => items.indexOf(item) === index))
  .reduce((acc, item) => acc + item.length, 0);

// 6382
console.log(groups);

// function removeDupes(array) {
//   const newArray = array.map(a => a.replace(/\n/g, '').split(''));
//   return newArray.map(items => items.filter((item, index) => items.indexOf(item) === index));
// }

// function countArrayLengths(array) {
//   return array.reduce((acc, item) => acc + item.length, 0)
// }

//console.log(countArrayLengths(removeDupes(groups)));
//6382
