// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const elements = {};  
  let mChar = '';
  let max = 0;
  str.split('').forEach(char => {
    if (! elements[char]) {
      elements[char] = 1;
    } else {
      elements[char] ++;
    }
  });
  for(let char in elements) {
    if (elements[char] > max) {
      max = elements[char];
      mChar = char;
    }
  }
  return mChar;
}

module.exports = maxChar;
