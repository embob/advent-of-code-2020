const { readFileSync } = require('fs');

function createOperations(line) {
  const [type, value] = line.split(' ');
  return { type, value: Number(value) };
}

const input = readFileSync('./input.txt').toString()
  .split(/\n/).map(createOperations);

function runInstructions(instructions) {
  let total = 0;
  for (let i = 0; i < instructions.length;) {
    const operation = instructions[i];

    if (operation.visited === true) return [false, total];

    operation.type === 'acc' ? total += operation.value : total;

    operation.type === 'jmp' ? i += operation.value : i++;

    operation.visited = true;
  }
  return [true, total];
}

function findAndSwap() {
  for (let i = 0; i < input.length; i++) {
    const copy = JSON.parse(JSON.stringify(input));
    if (copy[i].type === 'jmp') {
      copy[i].type = 'nop'
    } else if (copy[i].type === 'nop') {
      copy[i].type = 'jmp';
    }
    // if (['jmp', 'nop'].includes(input[i].type)) {
    //   input[i].type = (input[i].type === 'nop') ? 'jmp' : 'nop';
    // }
    const [successful, total] = runInstructions(copy);
    if (successful) return total;
  }
}

console.log(findAndSwap());
