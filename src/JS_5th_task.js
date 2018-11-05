// I desided to make a task bymyself to check how asynchronous code is working.
// Create a function showArgumentsWithDelay01(), which will log to console it's
// arguments one by one every second, using callback function.

function showArgumentsWithDelay01() {
  let i = 0;
  let arr = Array.from(arguments);

  (function delayMessage() {
    if (arr.length > i) {
      setTimeout(function() {
        console.log(arr[i]);
        i++;
        delayMessage();
      }, 1000);


    } else {
      console.log('That\'s it!');
    }
  })();
}
showArgumentsWithDelay01('hei', 'you', 'my', 'little', 'sister');

// Create a function showArgumentsWithDelay02(), which will log to console it's
// arguments one by one every second, using promises.

function showArgumentsWithDelay02(...arr) {
  if (arr.length > 0) {
    let k = 0;

    function promiseNewDelay() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(arr[k]);
          k++;
          resolve();
        }, 1000);
      });
    }
    let p = promiseNewDelay();
    for (var i = 1; i < arr.length; i++) {
      p = p.then(promiseNewDelay);
    }
  }
}
showArgumentsWithDelay02('hei', 'you', 'my', 'little', 'brother');
