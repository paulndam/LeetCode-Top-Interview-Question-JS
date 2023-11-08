/*
Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
A subarray is a contiguous part of the array.
Example 1:

Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

*/

function numSubArrayWithSum(nums, goal) {

    let subArrayMap = new Map();
    let answer = 0;
    let currPrefixSum = 0;

    for (let right = 0; right < nums.length; right++) {

        currPrefixSum += nums[right]

        if (currPrefixSum === goal) {
            answer++
        }

        // check the number times the (currPrefixSum - goal) has appeared before
        answer += subArrayMap.get(currPrefixSum - goal) || 0

        // update map with current prefix sum.
        subArrayMap.set(currPrefixSum, (subArrayMap.get(currPrefixSum) || 0) + 1)

    }

    return answer

}

console.log(numSubArrayWithSum([1,0,1,0,1],2))