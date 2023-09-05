import * as _ from "../Kolibri/contrib/wild_wyss/src/sequence/sequence.js"

const double = n => 2 * n;
const isEven  = n => n % 2 === 0;

const doubleAndLog = n => {
  const result = double(n);
  console.log(`The double of ${n} is ${result}`);
  return result;
};

const isEvenAndLog  = n => {
  const result = isEven(n);
  console.log(`${n} is even: ${result}`);
  return result;
};

// standard JS approach
const numbers = [0,1,2,3,4,5,6,7,8,9,10];
