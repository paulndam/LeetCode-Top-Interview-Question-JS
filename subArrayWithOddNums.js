/*
Given an array of positive integers nums and an integer k. Find the number of subarrays with exactly k odd numbers in them.

For example, given nums = [1, 1, 2, 1, 1], k = 3, the answer is 2. The subarrays with 3 odd numbers in them are [1, 1, 2, 1, 1] and [1, 1, 2, 1, 1].
 */

function subArrayWithOddNumbers(nums, k) {

    let count = new Map();
    count.set(0, 1)

    let ans = 0;
    let curr = 0;


    for (const num of nums) {

        if (num % 2 === 1) {

            curr ++ // increment current counter every time we encounter an odd number.
        }
        // if a key exist in our hashMap , the get that key count, otherwise set it to zero
        ans += count.get(curr - k) || 0
        // if key exist already, increment count by 1, otherwise set it
        count.set(curr,(count.get(curr) || 0) + 1)
    }

    return ans
}

console.log(subArrayWithOddNumbers([1, 1, 2, 1, 1],3))