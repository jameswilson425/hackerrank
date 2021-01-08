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

