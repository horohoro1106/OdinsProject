var caesar = function(str,shift) {
  str = str.split('');
  str = str.map(function(el){
      var code = el.charCodeAt(0);
      if(code >=65 && code <=90) {
          code = code + shift;
            if(code > 90) {
                while(code > 90) {
                code = code - 91 + 65;
                }
            }
            if(code < 65) {
                while(code < 65) {
                code = 90 - (64 - code);
                }
            }
        return String.fromCodePoint(code);
      }

      if(code >= 97 && code <= 122) {
          code = code + shift;
            if(code > 122) {
                while(code > 122) {
                code = code - 123 + 97;
                }
            }
            if(code < 97) {
                while(code < 97) {
                code = 122 - (97 - code);
                }
            }
        return String.fromCodePoint(code)
      }
    return el;  // since we transform only letters, we need to put this return line so other characters will be keeped
  })
  str = str.join('');
  return str;
}

module.exports = caesar
