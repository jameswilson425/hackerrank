// Loop and print
// set sea level variable to keep track of above or below zero
// loop through and add or subract one based off of D or U

function countingValleys(steps, path) {
  var i = 0;
  var seaLevel = 0;
  var valleyCounter = 0;
  while (i < path.length - 1) {
    if (i === 0 && path[i] === “D”) {
      console.log(`valley counter ${valleyCounter += 1}`);
    }
    else if (seaLevel === 0 && path[i + 1] === “D”) {
      console.log(`valley counter ${valleyCounter += 1}`);
    }
    if (path[i] === “D”) {
      console.log(`sea level counter in D ${seaLevel -= 1}`);
    }
    else if (path[i] === “U”) {
      console.log(`sea level counter in U ${seaLevel += 1}`);
    }
    i += 1;
  }
  return valleyCounter;
}
console.log(countingValleys(8, “UDDDUDUU”));


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
}

