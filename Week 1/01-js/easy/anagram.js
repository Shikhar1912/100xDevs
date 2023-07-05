/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

//COMPARING THE OBJECTS CREATED
function compare(obj1, obj2) {
  for (key in obj1) {
    if (key in obj2 && obj2[key] === obj1[key]) {
      continue;
    } else return false;
  }
  return true;
}

//MAKING STRINGS FROM THE OBJECT
function objectification(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    str = str.toLowerCase();
    if (str[i] in obj) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}

function isAnagram(str1, str2) {

  if (str1.length !== str2.length) return false;
  
  const obj1 = objectification(str1);
  // console.log(obj1);

  const obj2 = objectification(str2);
  // console.log(obj2);

  return compare(obj1, obj2);
}


let ans = isAnagram("stressed", "dessertsq");
console.log(ans);
module.exports = isAnagram;
