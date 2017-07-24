/*
 * Given a sorted array, find the index of the specified element
 * using binary search.
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 * https://en.wikipedia.org/wiki/Binary_search_algorithm
 * */

/**
 *  * const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 *	* console.log(index); // 1
**/

// const binarySearch = (nums, target) => {
//   return nums.indexOf(target)
// };

const binarySearch = (nums, target) => {

};

// TEST SUITE
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)); // <--- index location 1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)); // <--- index location 3
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)); // <--- index location 6
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // <--- index location 9
