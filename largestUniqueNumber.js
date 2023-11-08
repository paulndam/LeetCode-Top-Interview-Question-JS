/*
Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

*/


function largestUniqueNumber(nums) {

    let counts = new Map();
    let maxVal = -1

    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1)

    }

    console.log(counts.entries())

    for (const [key, val] of counts.entries()) {
        console.log(`Key ---> ${key} : Value ---->${val}`)

        if (val === 1) {
            maxVal = Math.max(maxVal,key)

        }

    }

    return maxVal
}

console.log(largestUniqueNumber([5,7,3,9,4,9,8,3,1]));console.log(largestUniqueNumber([9,9,8,8]))