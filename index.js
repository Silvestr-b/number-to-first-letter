'use strict'

module.exports = num => {
	const letters = ['a','b','c','d','e','f','g','h','i','j'];

	if(num >= 0 && num <= 9){
		return letters[num]
	} else
	if(+num.toString()[1] === 0){
		return '_' + num.toString(36)
	} else
	if(num > 9){
		const str = num.toString();
		const first = letters[+str.slice(0,1)];
		const other = (+str.slice(1)).toString(36);

		return first + other
	}		
}