var snakeCase = function(str) {
    if(!(/ /.test(str)) && !(/(\.\.)/.test(str))){
        if(/-/.test(str)) {
             return str.toLowerCase().replace(/[-]/g,'_');
         }
        for(var i=0;i<str.length;i++) {
             if(/[A-Z]/.test(str[i])) {
                 str = str.slice(0,i) + '_' + str[i].toLowerCase() + str.slice(i + 1);
             }
         }
        return str;
    }
    var result = str.toLowerCase().replace(/[,?!]/g,'').replace(/[ ]/g,'_').replace(/(\.\.)/g,'_').replace(/(_+$)/,'');

        return result;

}

module.exports = snakeCase
