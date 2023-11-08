/*
Given an integer array nums and an integer k, find the number of subarrays whose sum is equal to k.
 */

function subArraySum(nums, k) {

    let count = new Map();
    count.set(0,1)
    let curr = 0;
    let ans = 0


    for (const num of nums) {
        console.log("num ------>",num);

        curr += num;
        console.log("curr ------>",curr);

        ans += count.get(curr - k) || 0
        console.log("ans ------>", ans);

        count.set(curr, (count.get(curr) || 0) +1)
    }
    return ans
}

console.log(subArraySum([1,2,1,2,1],3))