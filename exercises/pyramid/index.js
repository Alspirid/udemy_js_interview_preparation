// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   let blocks, space;
//   for (let i = 1; i <= n; i++) {
//       blocks = (i * 2 -1);
//       space = (n * 2 - 1 - blocks)/2; 
//       console.log(' '.repeat(space) + '#'.repeat(blocks)+ ' '.repeat(space));    
//   }
// }

function pyramid (n, k = 1) {
  let blocks, space;
  blocks = (k * 2 - 1);
  space = (n * 2 - 1 - blocks)/2;
  if ( k === n) {
    console.log(' '.repeat(space) + '#'.repeat(blocks)+ ' '.repeat(space));
    return;
  }
  console.log(' '.repeat(space) + '#'.repeat(blocks)+ ' '.repeat(space));
  pyramid(n, k + 1);
}


module.exports = pyramid;


// '  #  '
// ' ### '
// '#####'
