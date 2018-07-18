function translate(str) {
	var words = str.split(' ');
	words = words.map(function(el) {
		if(/^[aeuio]/.test(el)) {
			return el + 'ay';
		}
		var i = el.search(/[aeuio]/);
		if(el[i - 1] + el[i] == 'qu') {   //this thing is not really important for pigLatin, it's just to pass someones test case for 'qu'
			return el.slice(i + 1) + el.slice(0,i + 1) + 'ay';
		}
		return el.slice(i) + el.slice(0,i) + 'ay';
	});
	words = words.join(' ');
	return words;
}


module.exports = {
	translate
}

