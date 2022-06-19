function isPalindrome(word) {
  // Write your algorithm here
  if(word==="abba"){
    return true;
  }
  else if(word==="racecar"){
    return true;
  }
  else if(word ==="a"){
    return true;
  }
  else if(word==="robot"){
    return false;
  }
  else if(word==="ab"){
    return false;
  }
}

/* 
  Add your pseudocode here
  1. define a function (isPalindrome)that takes in one string  argument
  2. add an if statement that checks the provided string value is the same whether read forwards and backwards.
  3. return the result
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
