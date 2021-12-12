/*
Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.

Examples:
          yeah_nope(true) ➞ "yeah";
          yeah_nope(false) ➞ "nope"
 */

function yeah_nope(bool) {
  return bool ? 'yeah' : 'nope';
}

const yep = yeah_nope(true);
const nop = yeah_nope(false);

console.log(yep, nop);
