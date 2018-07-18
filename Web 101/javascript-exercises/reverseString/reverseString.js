var reverseString = function(string) {
    if(string == '') return '';
  var result = string.split('').reverse().join('');
  return result;
}

module.exports = reverseString