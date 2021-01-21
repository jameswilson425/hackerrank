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

var longestCommonPrefix = function(strs) {
  var prefix = "";
  var i = 0;

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