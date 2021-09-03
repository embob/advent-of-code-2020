const a = [true, true, true, true, true ];

const result = a.reduce((prev, curr) => prev && curr);

console.log(result);
