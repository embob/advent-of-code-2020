const data = require('fs').readFileSync('./assets/10.txt')
  .toString()
  .split('\n')
  .map(Number)
  .sort((a, b) => a - b);

function connectAdapters(input) {
  const copy = [...input];
  copy.push(Math.max(...copy) + 3);
  copy.unshift(0);

  const diff = (n, idx) => n - copy[idx];
  const group = (o, next) => ({ ...o, [next]: (o[next] || 0) + 1, });

  return copy.slice(1) // [1, 2, 4]
    .map(diff) // [1,3,3,1,3]
    .reduce(group, {}); // { '0': 22, '3': 465 }
}
const { '1': one, '3': three } = connectAdapters(data);
console.log(one * three);
