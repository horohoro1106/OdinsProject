var sumAll = function(start,end) {
 var result = 0;
 var num= start;
 if( start > end) {
   num = end;
   end = start;
 }
 if(start < 0 || end < 0) {
     return 'ERROR';
 }
 if(start.slice || end.slice) { //return error if one of parameter are string,also works with arrays
     return 'ERROR';
 }
 while(num <= end) {
     result+=num;
     num+=1;
 }
 return result;
}

module.exports = sumAll
