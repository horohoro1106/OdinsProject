var ftoc = function(temp) {
  var result = (temp - 32) * (5/9);
  return parseFloat(result.toFixed(1));
}

var ctof = function(temp) {
  var result = temp * (9/5) + 32;
  return parseFloat(result.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
