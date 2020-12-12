const data = require('./input');

const passports = data
  .split('\n\n') // remove 2 line gaps and wrap everything in an array
  .map(a => a.replace(/\n/g, ' ')) // remove line breaks and add spaces between items
  .map(b => b.split(' ')) // split each line into it's own array + split each item up within it.
  .map(c => c.sort());


const range = (input, start, end) => !isNaN(input) && Number(input) >= start && input <= end;

const byr = year => range(year, 1920, 2002);
const iyr = year => range(year, 2010, 2020);
const eyr = year => range(year, 2020, 2030);

const hgt = number => {
  const match = number.match(/^(\d{2,3})(cm|in)$/);
  if (!match) return false;
  const [_, amount, unit] = match;
  return unit === 'cm' ? range(amount, 150, 193) : range(amount, 59, 76);
}

const hcl = colour => /^#[a-f0-9]{6}$/.test(colour);

const ecl = colour => /^amb|blu|brn|gry|grn|hzl|oth$/.test(colour);

const pid = id => /^\d{9}$/.test(id);

function validateFields(passports) {
  const [key, value] = passports.map(a => a.map(b => b.split(':')));
}
