var repeatString = function(str,num) {
  var result='';
  if(num < 0) return 'ERROR';
  if(num == 0) return '';
  for(var i=0;i<num;i++){
      result+=str;
  }
  return result;
}

module.exports = repeatString
