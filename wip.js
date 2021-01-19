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

