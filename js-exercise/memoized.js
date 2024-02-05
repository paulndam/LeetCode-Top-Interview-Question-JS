/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  // store results of function
  const cache = {};
  // keep track of how many times the function was called.
  let calledFnCount = 0;

  return function (...args) {
    // serialize the args to use a key for the cache;
    const key = JSON.stringify(args);

    // check if result is in the cache;
    if (!(key in cache)) {
      // call function to store the result in the cache;
      cache[key] = fn(...args);
      // increment count
      calledFnCount++;
    }
    return cache[key];
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
