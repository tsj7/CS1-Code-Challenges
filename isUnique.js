/* 
* Implement an algorithm to determine if a string has all unique characters.
* Extra Credit - Answer this question - What if you cannot use additional data structures?

MY EXPLAINATION - write code that checks every item in every string, compares them to each other, and checks for duplicates.

cycle through every character of every string - for loop
compare each item - some type of property method? to check value?

*/

const isUnique = (str) => {

for (i = 0; i , str.length; i++) {
	if (str[i].includes === str[i].includes) {
		return 'unique characters do not exist';
}	else {
		return 'unique characters exist';
  }

 }

};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false