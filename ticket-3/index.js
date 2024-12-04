function countNumberOfNinesInNumber(number) {
  let count = 0;
  let newNumber = number.toString();
  
  for (let i = 0; i < newNumber.length; i++) {
    const digit = newNumber[i];
    if ("9" === digit) {
      count++;
    }
  }

  return count;
}
console.log(countNumberOfNinesInNumber(99999999));




// it was expecting string as an input. we converted number to string