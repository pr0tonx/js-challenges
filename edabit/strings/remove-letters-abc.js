/*
Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version.
If the given string does not contain "a", "b", or "c", return null.

Examples:

removeABC("This might be a bit hard") ➞ "This might e  it hrd"
removeABC("hello world!") ➞ null
removeABC("") ➞ null

Notes:

If the given string does not contain "a", "b", or "c", return null.
 */

function removeABC(str) {

  function removeLetter(str) {
    let formatedString = '';

    for (let x of str) {
      let stringToReplace = x;

      if (x === 'a' || x === 'b' || x === 'c') {
        stringToReplace = '';
      }

      formatedString += stringToReplace;
    }

    return formatedString
  }

  if (!str.includes('a') && !str.includes('b') && !str.includes('c')) return null;
  else return removeLetter(str);
}

console.log(removeABC('does not have a string'));
console.log(removeABC('This might be a bit hard'));
console.log(removeABC(''));
console.log(removeABC('not'));

// top solved suggestion
function removeABC2(str) {
  const res = str.replace(/[abc]/g, '');
  return str === res ? null : res;
}
