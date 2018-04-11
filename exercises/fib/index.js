// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if ( n <= 1) {
    return n;
  }
  if (n === 2) {
    return 1;
  }
  return fib(n-1) + fib(n-2);
}

function fib_sum(n) {
  if ( n === 0) {
    return [0];
  }
  if ( n === 1) {
    return [0,1];
  }
  if (n === 2) {
    return [0,1,1];
  }
  let sum = fib_sum(n-1);
  sum.push(sum[sum.length-2] + sum[sum.length-1]);
  return sum;
}
  
function totals(n) {
  const arr = fib_sum(n);
  return arr.reduce((total, elem)=> total + elem);
}  


const iterativeFibs = n => {
  const fibsArray = [0,1,1];
  if ( n ===0 || fibsArray[n]) {
    return fibsArray[n];
  }
  for (let i = 3; i <= n; i++) {
    let last =  fibsArray[fibsArray.length-2]+fibsArray[fibsArray.length-1];
    fibsArray.push(last);
  }
  return fibsArray[n];
};

class Fibonacci {
  constructor(){
    this.fibs = [0,1];
  }
  fibSumDynamic(n) {
    if ( n === 0 || this.fibs[n]) {
      return this.fibs[n];
    }
    let value =  this.fibSumDynamic(n-1) + this.fibSumDynamic(n-2);
    this.fibs[n] = value;
    console.log(this.fibs);
    return value;
  }
}

module.exports = fib;
