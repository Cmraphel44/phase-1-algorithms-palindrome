function isPalindrome(str){
  let reversed = str.split("").reverse().join("");
  if (reversed === str) return true;

  return false;
  
}

isPalindrome("abba");



/* If given variable's letters are the same forwards as backwards then return true. If they aren't the same forwards as backwards then return false.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
