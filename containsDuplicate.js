/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

function containsDuplicates(nums) {

    let countElMap = new Map();

    for (const num of nums) {
        countElMap.set(num, (countElMap.get(num) || 0) + 1)
    }

    for (const [key, val] of countElMap) {
        if (val >= 2) {
            return true
        }
    }

    return false

}

console.log(containsDuplicates([1, 2, 3, 1]))
console.log(containsDuplicates([1, 2, 3, 4]))

// Refactored version.

function containsDuplicates2(nums) {

    let countElMap = new Map();

    for (const numElement of nums) {

        if (countElMap.has(numElement)) {
            return true
        }

        countElMap.set(numElement,)
    }
    return false
}



console.log(containsDuplicates2([1, 2, 3, 1]))
console.log(containsDuplicates2([1, 2, 3, 4]))
