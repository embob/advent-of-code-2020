const Input = require('./input');

const passwordStrings = Input.passwords;

function createPassword(password) {
  const spacesRemoved = password.split(' ');
  const minMax = spacesRemoved[0].split('-');
  return password = {
    min: minMax[0],
    max: minMax[1],
    char: spacesRemoved[1][0],
    value: spacesRemoved[2],
  }
}

function checkByCharCount({ min, max, char, value }) {
  let regexChar = new RegExp(char, 'g');
  const charCount = (value.match(regexChar) || []).length;

  return charCount >= min && charCount <= max;
}

function checkByCharPosition({ min, max, char, value }) {
  const minPositionValue = value[min - 1] === char;
  const maxPositionValue = value[max - 1] === char;
  return (minPositionValue && !maxPositionValue || !minPositionValue && maxPositionValue);
}

const validPasswordsPt1 = passwordStrings
  .map((password) => checkByCharCount(createPassword(password)))
  .filter((value) => value)
  .length;

const validPasswordsPt2 = passwordStrings
  .map((password) => checkByCharPosition(createPassword(password)))
  .filter((value) => value)
  .length;

console.log(validPasswordsPt1);
// 515
console.log(validPasswordsPt2);
