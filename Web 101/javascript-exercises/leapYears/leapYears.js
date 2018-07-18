var leapYears = function(year) {
  if(year % 4 != 0){
      return false
  }
  if((year % 100 == 0) && (year % 400 != 0)) {
      return false;
  }

  return true;
}

module.exports = leapYears
