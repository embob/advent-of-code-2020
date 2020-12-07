const ExpenseReport = require('./input');

const numbersArray = ExpenseReport.figures;

function findTwo() {
  for (let i = 0; i < numbersArray.length; i++) {
    const remainder = 2020 - numbersArray[i];
    const findIndex = numbersArray.indexOf(remainder);
    if (findIndex > -1) return numbersArray[i] * remainder;
  }
}

function findThree() {
  for (let i = 0; i < numbersArray.length; i++) {
    for (let j = 0; j < numbersArray.length; j++) {
      const twoNumbers = numbersArray[i] + numbersArray[j];
      if (twoNumbers < 2020) {
        const thirdNumber = 2020 - twoNumbers;
        const findIndex = numbersArray.indexOf(thirdNumber);
        if (findIndex > -1) return numbersArray[i] * numbersArray[j] * thirdNumber;
      }
    }
  }
}

// Speed test + results logging

console.time('findTwo');
const findTwoResult = findTwo();
console.timeEnd('findTwo');

console.time('findThree');
const findThreeResult = findThree();
console.timeEnd('findThree');

console.log('findTwo result', findTwoResult);
console.log('findThree result', findThreeResult);
