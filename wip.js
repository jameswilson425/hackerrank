// STACK OVERFLOW SOLUTION

// function countingValleys(n, s) {
//   let elevation = 0;
//   let traversedValleys = 0;
//   for (let i = 0; i < n; i++) {
//       if (s[i] === "D") {
//           --elevation;
//       } else if (s[i] === "U") {
//           if (++elevation === 0) traversedValleys++;
//       }
//   }
//   return traversedValleys;
// }


// OG CODE FROM WEB

// var longestCommonPrefix = function(strs) {
//   let prefix = ""
//   if(strs === null || strs.length === 0) return prefix

//   for (let i=0; i < strs[0].length; i++){ 
//       const char = strs[0][i] // loop through all characters of the very first string. 

//       for (let j = 1; j < strs.length; j++){ 
//         // loop through all other strings in the array
//           if(strs[j][i] !== char) return prefix
//       }
//       prefix = prefix + char
//   }

//   return prefix
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// https://dev.to/urfan/leetcode-longest-common-prefix-with-javascript-32ca

// MY REFACTOR OF OG CODE

var longestCommonPrefix = function(strs) {
  var prefix = "";
  var i = 0;
  // if(strs === null || strs.length === 0) return prefix

  while (i < strs[0].length) {
    var characters = strs[0][i];
    var i2 = 1;

    while (i2 < strs.length) {
      if (strs[i2][i] !== characters) {
        return prefix;
      }
      i2 += 1;
    }
    prefix = prefix + characters;
    i += 1;
  }
  return prefix;

};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// GROUP CODE

// Loop through array and print each word
// loop through each word and print the first couple letters
// set conditional to determine whether the first letter of each word is the same
  // if they are, push first letter of a word into empty string
  // if not, stop the loop
  // function longestCommonPrefix(strs) {
  //   var i = 0;
  //   var wordIndex = 0;
  //   var loopCondition = true;
  //   var longestCommonPrefixAnswer = “”;
  //   while (i < strs.length) {
  //     while (loopCondition) {
  //       if (strs[i][wordIndex] === strs[i + 1][wordIndex]) {
  //         longestCommonPrefixAnswer += strs[i][wordIndex];
  //         wordIndex += 1;
  //       }
  //       else {
  //         var popOff = strs[i].length - wordIndex;
  //         longestCommonPrefixAnswer = longestCommonPrefixAnswer.slice(0, popOff);
  //         loopCondition = false;
  //       }
  //     }
  //     i += 1;
  //     wordIndex = 0;
  //     loopCondition = false;
  //   }
  //   return longestCommonPrefixAnswer;
  // };
  // console.log(longestCommonPrefix([“flower”,“flow”,“flight”, “flour”, “flopped”]));



  // UTOPIAN TREE

  // Write a method that takes in an integer
  // Set height to 1 and i to 0
  // Create a function that either increases by 1 or doubles height per growth period


function utopianTree(n) {
  var h = 1;
  var i = 0;

  while (i <= n) { 
    if (i % 2 !== 0) {
      h *= 2;
    } else {
      h += 1;
    }
  }
  i += 1;
}

console.log();