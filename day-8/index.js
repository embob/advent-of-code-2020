const { readFileSync } = require('fs');

function createOperations(line) {
  const [type, value] = line.split(' ');
  return { type, value: Number(value) };
}

const input = readFileSync('./input.txt').toString()
  .split(/\n/).map(createOperations);

function runInstructions(array) {
  for (let i = 0, total = 0; i < array.length;) {
    const operation = array[i];

    if (operation.visited === true) return total;

    operation.type === 'acc' ? total += operation.value : total;

    operation.type === 'jmp' ? i += operation.value : i++;

    operation.visited = true;
  }
}

console.log(runInstructions(input));































