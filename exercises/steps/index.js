// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   let output = '#';
//   let spaces = ' ';
//   for (let i = 1; i <= n; i++) {
//     console.log(output.repeat(i) + spaces.repeat(n-i));
//   }
// }

module.exports = steps;

function steps (n, k = 1) {
  if (k === n) {
    console.log('#'.repeat(k) + ' '.repeat(n - k));
    return;
  }
  console.log('#'.repeat(k) + ' '.repeat(n - k));
  steps(n, k + 1);
}
