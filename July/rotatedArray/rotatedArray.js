/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(n))
 */


 Solution

// Time complexity: O(log n)
function rotatedBinarySearch(arr, k) {
    var l = 0,
        r = arr.length - 1; // last index of arr
    while (l <= r) { // when l = or < last index of arr do the below
        var m = Math.floor((l + r) / 2); // sets m = last ind of arr plus and l then div's by 2

        if (arr[m] == k) {
            return m;
        }

        if (arr[l] < arr[m]) {
            if (arr[l] <= k && k < arr[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (arr[m] <= k && k < arr[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return -1;
}

var arr = [4, 5, 6, 7, 0, 1, 2];
rotatedBinarySearch(arr, 6);
