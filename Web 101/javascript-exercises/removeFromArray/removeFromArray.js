var removeFromArray = function(...args) {
  var arr = args[0];
  var toDelete = args.slice(1);
  var result = [];
  for(var i=0;i<arr.length;i++) {
    if(toDelete.indexOf(arr[i]) < 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = removeFromArray
