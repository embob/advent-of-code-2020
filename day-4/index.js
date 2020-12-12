const data = require('./input');

const expected = ['byr','iyr','eyr','hgt','hcl','ecl','pid'].sort();

const validate = a => a.length === expected.length && a.every((value, index) => value === expected[index]);

const passports = data
  .split('\n\n') // remove 2 line gaps and wrap everything in an array
  .map(a => a.replace(/\n/g, ' ')) // remove line breaks and add spaces between items
  .map(b => b.split(' ')) // split each line into it's own array + split each item up within it.
  .map(c => c.sort())
  .map(c => c.map(d => d.substring(0, 3))) // get the part before the :
  .map(e => e.filter(f => f != 'cid')) // strip out the cids in the arrays
  .filter(g => g.length > 6) // we only want arrays with length of 7
  .length;


console.log(passports);
