/*
Given a 2D array nums that contains n arrays of distinct integers, return a sorted array containing all the numbers that appear in all n arrays.

For example, given nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]], return [3, 4]. 3 and 4 are the only numbers that are in all arrays.
 */

function intersection(mainArr) {

    // Initialize map to keep track or frequency of the occurrence of each element in the array.
    let count = new Map();
    // initialize empty array
    let ans = [];

    // loop thru main array first.
    for (const subarray of mainArr) {
         // using a set to keep the uniqueness of sub-array elements. This avoids duplicates.
        let uniqueSubArrElements = new Set(subarray)
        // loop through the unique elements that are in the set array.
        for (const uniqueElement of uniqueSubArrElements) {
            // after looping over the inner array.
            // set the existing element in the map and increment the count
            // if element doesn't exist, set the count to 1.
            count.set(uniqueElement, (count.get(uniqueElement)||0)+1)
        }

    }


    // loop thru the hashMap and check what elements are in the inner array
    for (const [key, value] of count.entries()) {
        console.log(key, value)
        if (value === mainArr.length) {
            ans.push(key)
        }
    }


    // sort and return the result
    ans.sort((a, b) => a - b)

    return ans

}

console.log(intersection([[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]))

