/*
You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.
Return the maximum score you can get by erasing exactly one subarray.

An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

Example 1:

Input: nums = [4,2,4,5,6]
Output: 17
Explanation: The optimal subarray here is [2,4,5,6].

*/

function maximumUniqueSubArray(nums) {

    let numSet = new Set();
    let maxScore = 0
    let left = 0
    let curr = 0

    for (let right = 0; right < nums.length; right++) {

        while (numSet.has(nums[right])) {
            numSet.delete(nums[left])
            curr -= nums[left]
            left++
        }

        numSet.add(nums[right])
        curr += nums[right]

        maxScore = Math.max(maxScore, curr)
    }

    return maxScore
}

console.log(maximumUniqueSubArray([4,2,4,5,6]))