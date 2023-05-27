// Runtime: O(n)
function hasTargetSum(array, target) {
  const seenNumbers = {};

  for (const number of array) {
    // n steps
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }

  return false;
}

// O(n) runtime
function findSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}

// O(1) runtime
function findSock(object) {
  if (object.sock) return "sock";
}

/* 
  Write the Big O time complexity of your function here
  => Runtime: O(n^2)
  => Space: O(n)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  =>This object can be used to keep track of numbers we've already seen when iterating through an array. We start by looping through each number
   in the array and then identify a complement that adds to the target (comp = target - num). Then, we check if any key on our object is equal to 
   the complement. If so, it returns true; otherwise, it adds that number into the object. Finally, if no matches are found after reaching end of 
   array iteration then false is returned.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  //
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  //
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 7, 4], 6));
}

module.exports = hasTargetSum;
