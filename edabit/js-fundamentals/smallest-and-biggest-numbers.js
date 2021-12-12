/*
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
Examples:   minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
            minMax([2334454, 5]) ➞ [5, 2334454]
            minMax([1]) ➞ [1, 1]
 */

function minMax(arr) {
  if (arr.length === 1) {
    return [arr[0], arr[arr.length - 1]];
  } else {
    arr.sort((a, b) => a > b ? 1 : -1);
    return [arr[0], arr[arr.length - 1]];
  }
}

const res = minMax([6, 2, 23, 1666, -5]);
const res2 = minMax([6, 2, 23, 1])
const res3 = minMax([1]);
console.log(res, res2, res3);
