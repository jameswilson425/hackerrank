// Print out year
// determine whether year is in julien or gregarian calendar
// if year is in julien calendar, figure out whether it’s a leap year (divisible by 4) or not
// if it is a leap year, print 12.09.year otherwise print 13.09.year
// if year is in gregarian calendar, figure out whether it’s a leap year (divisible by 4, but not 100 and divisible by 400) or not
// if it is a leap year, print 12.09.year otherwise print 13.09.year
function dayOfProgrammer(year) {
  if (year < 1918) {
    // Julien
    if (year % 4 === 0) {
      return `12.09.${year}`;
    }
    else {
      return `13.09.${year}`;
    }
  }
  if (year > 1918) {
    // Gregarian
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
      return `12.09.${year}`;
    }
    else {
      return `13.09.${year}`;
    }
  }
  if (year === 1918) {
    return `26.09.${year}`;
  }
}
dayOfProgrammer(1918);


// Loop through and print each price of food in the array
// print the price of the item anna didn’t eat
// add all items anna did eat (minus what she didn’t eat) and print
// if what anna did eat divided by 2 is equal to what anna contributed to the meal, print bon appetit
// if not, subtract what anna ate divided by 2 from what she paid and print number
function bonAppetit(bill, k, b) {
  let i = 0;
  let annaTotal = 0;
  while (i < bill.length) {
    if (i !== k) {
      annaTotal += bill[i];
    }
    i += 1;
  }
  if (annaTotal / 2 === b) {
    return 'Bon Appetit';
  }
  else {
    return b - (annaTotal / 2);
  }
}
console.log(bonAppetit([3, 10, 2, 9], 1, 7));



// write conditional that says if n divided by 2 is less than p start from the back of the book
  //if n divided by 2 is more than p, start from the front of the book
// when starting at back of book, if total number of pages is even, first subract 1 and add 1 to a page counter, then subtract 2 and add 1 to page counter until you get to the page number
// when starting at the front of the book, add 2 to the index and add 1 to the counter until you get to the page number
//print counter
function pageCount(n, p) {
  let counter = 0;
  let startingPage = 0;
  if (n % 2 !== 0 && n - 1 === p || p === 1) {
    counter = 0;
  }
  else if (n / 2 < p) {
    //start from back
    if (n % 2 !== 0) {
      startingPage = n - 1;
    }
    else {
      startingPage = n;
    }
    while (startingPage > p) {
      startingPage -= 2;
      counter += 1;
    }
  }
  else if (n / 2 >= p) {
    //start from front
    startingPage = 1;
    while (startingPage < p) {
      startingPage += 2;
      counter += 1;
    }
  }
  return counter;
}
console.log(pageCount(6, 3));
