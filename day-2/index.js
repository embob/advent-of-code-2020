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

const passwords = passwordStrings.map((passwordString) => createPassword(passwordString));

function checkValidity(min, max, char, password) {
  let validPassword = 0;
  let regexChar = new RegExp(char, 'g');
  const charCount = password.match(regexChar) ? password.match(regexChar).length : 0;

  if (charCount >= min && charCount <= max) {
    return true;
  }
  return false;
}

const validPasswords = passwords.map((password) => checkValidity(password.min, password.max, password.char, password.value));

function countValidPasswords(validPasswords) {
  let validCount = 0;
  for (let i = 0; i < validPasswords.length; i++) {
    if (validPasswords[i] === true) {
      validCount++;
    }
  }
  return validCount;
}

console.log(countValidPasswords(validPasswords));
