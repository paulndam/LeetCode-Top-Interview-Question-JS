/**
 * Example 3: Given an integer array nums, find all the numbers x in nums that satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.
 */
/**
 * [2,4,6,3,7,9,8]
 */
function findNumbers(nums) {

    let ans = [];
    let numSet = new Set(nums);

    for (const num of nums) {
        if (!numSet.has(num + 1) && !numSet.has(num - 1)) {
            ans.push(num)
        }
    }

    return ans

}

console.log(findNumbers([2,4,6,3,7,9,8]))