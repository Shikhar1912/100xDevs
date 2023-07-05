/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str
    .toLowerCase()
    .replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()\s]/g, "")
  console.log(str);
  let s = 0;
  let e = str.length - 1;
  while (s <= e) {
    if (str[s] === str[e]) {
      s++;
      e--;
    }
    else return false;
  }
  return true;
  
}

console.log(isPalindrome("Eva, can I see bees in a cave?"));
module.exports = isPalindrome;
