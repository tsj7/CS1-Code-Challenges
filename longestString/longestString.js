/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 

I could not solve the problem but wanted to go through my train of thought. 
My solution is long hand and is not optimized at all, just wanted to walk though 
my train of thought logically. 

First I created the array that needs to be accepted by a function.

Then I wrote my function acceptArray on line 21, I set it execute a for loop 
and else if statement. 

For loop to cycle through the contents of the array, else if statment to compare 
the lengths of the strings in the array. 

I wrote out my thinking inside the for loop but I know it isn't executing properly 
and that there is a more concise way to do this, I just don't know what that way is.


*/


const longestString = (strArr) => {
	let strTwo = '';
	strArr.forEach(str => {
		if(str.length > strTwo.length) strTwo = str;
	})
	return strTwo;
};

longestString(['string1', 'string10', 'string100']);

/*

TRY NUMBER 1

const longestString = 0;

const array = ['string1', 'string10', 'string100'];

 function acceptArray (array) {
 		for  (i = 0; i < array.length; i++) {


 		if ('string1'.length > 'string10'.length && 'string1'.length > 'string100'.length) {
 			return 'string1' 
 			
 		 } else if ('string10'.length > 'string1'.length && 'string10'.length > 'string100'.length) {
 			return 'string10'
 		}  else {
 			return 'string100'
 			}



*/