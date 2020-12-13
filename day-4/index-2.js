const data = require('./input');

const range = (input, start, end) => !isNaN(input) && Number(input) >= start && Number(input) <= end;

const validator = {
  byr: year => range(year, 1920, 2002),

  iyr: year => range(year, 2010, 2020),

  eyr: year => range(year, 2020, 2030),

  hgt: number => {
    const match = number.match(/^(\d{2,3})(cm|in)$/);
    if (!match) return false;
    const [_, amount, unit] = match;
    return unit === 'cm' ? range(amount, 150, 193) : range(amount, 59, 76);
  },

  hcl: colour => /^#[a-f0-9]{6}$/.test(colour),

  ecl: colour => /^amb|blu|brn|gry|grn|hzl|oth$/.test(colour),

  pid: id => /^\d{9}$/.test(id),

}

function validateFields(passport) {
  return passport.map(x => {
    const [k, v] = x;
    try {
      return validator[k](v);
    } catch  {
      return false;
    }
  });
}

const passports = data
  .split('\n\n') // remove 2 line gaps and wrap everything in an array
  .map(a => a.replace(/\n/g, ' ')) // remove line breaks and add spaces between items
  .map(b => b.split(' ')) // [ [ eyr:2033, hgt:177cm, pid:173cm, ecl:utc ], [ eyr:2033, hgt:177cm, pid:173cm, ecl:utc ]]
  .map(c => c.filter(e => !e.startsWith('cid')))
  .filter(g => g.length > 6) // we only want arrays with length of 7
  .map(d => d.map(e => e.split(':')))  // [ eyr:2033] => [[eyr, 2033]]
  .map(passport => validateFields(passport)) // [ [true, false, true],  [false, false, true] ]
  .map(result => result.reduce((prev, curr) => prev && curr)) // [true, false, truth]
  .filter(t => t === true)
  .length;

// 127
 console.log(passports);
