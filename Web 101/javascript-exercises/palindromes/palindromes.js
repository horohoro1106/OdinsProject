var palindromes = function(str) {
   str = str.toLowerCase().replace(/[ ,.;:'"?!]/g,'');
   var reverse = str.split('').reverse().join('');
   if(str != reverse) {
       return false;
   }
   return true;
}

module.exports = palindromes
