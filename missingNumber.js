/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array. */


function missingNumber(nums) {

    let isMissingNum = new Set(nums);

    for (let i = 0; i <= nums.length; i++) {

        if (!isMissingNum.has(i)) {
            return i
        }

    }
}

console.log(missingNumber([3, 0, 1]))
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
console.log(missingNumber([0, 1]))
