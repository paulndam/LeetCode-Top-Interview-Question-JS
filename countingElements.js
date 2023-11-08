/*
Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

This means that, for every x element found in the array,
Check if x + 1 is also present in the array.

[1,2,4,6]

1+1 = 2 : present in array.
2+1 = 3 : not present in array.
etc
 */


function countingElements(arr) {

    const numSet = new Set(arr);// initialize array as a set
    let count = 0;
    // loop thru array
    for (let num of arr) {
        // check if num + 1 exist in the array of set
        if (numSet.has(num + 1)) {
            // if it does, increment count
            count++
        }
    }
    return count;
}

console.log(countingElements([1,1,3,3,5,5,7,7]))