/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.

primeSummation(17) should return a number.
primeSummation(17) should return 41.
primeSummation(2001) should return 277050.
primeSummation(140759) should return 873608362.
primeSummation(2000000) should return 142913828922.
 */

const logResult = require('./log-result');

function primeSummation(n) {
  for(let i = 2; i <= n; i++) {
    console.log('I', i);
    for(let j = n; j > 2; j--) {
      console.log('J', j);
    }
  }

  return true;
}

primeSummation(10);
