function logResult(func, arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(func(arr[i]))
  }
}

module.exports = {
  logResult
};
