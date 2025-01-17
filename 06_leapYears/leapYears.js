const leapYears = function (year) {
  let DivisibleByFour = year % 4 == 0;
  let isCentury = year % 100 == 0;
  let DivisibleByFourHundred = year % 400 == 0;
  if (DivisibleByFour && (!isCentury || DivisibleByFourHundred)) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
