/*
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.


Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

*/

const canJump = (nums) => {

    // initialize a maxReach
    let maxReach = nums[0]

    // iterate over array until i reach the next furthest index
    for (let i = 0; i < nums.length; i++){

        // check if current index is greater than the maxReach
        // if thats the case then return false, due to not being able to reach the last element
        if (i > maxReach) {
            return false
        }

        // update maxReach while iterating over array.
        maxReach = Math.max(maxReach, i + nums[i])

        // if maxReach is greater or equal to the last index
        // then return true
        if(maxReach >= nums.length - 1) return true
    }

    return false
}

console.log(canJump([0]))
console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3,2,1,0,4]))