function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('a and/or b are not numbers');
    }
  });
}

addPromise(2, 0).then(function(solution) {
  console.log("success:", solution);
}, function(error) {
  console.log("error:", error);
});;
