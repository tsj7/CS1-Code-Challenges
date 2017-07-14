/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.

*/


const longestString = (strArr) => {
	let strTwo = '';
	strArr.forEach(str => {
		if(str.length > strTwo.length) strTwo = str;
	})
	return strTwo;
};

longestString(['string1', 'string10', 'string100']);
