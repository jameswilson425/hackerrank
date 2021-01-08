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
      return “Bon Appetit”;
    }
    else {
      return b - (annaTotal / 2);
    }
  }
  console.log(bonAppetit([3, 10, 2, 9], 1, 7));