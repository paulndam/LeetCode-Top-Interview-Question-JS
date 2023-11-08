/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.


Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
 */

function moveZeroes(nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {

        if (nums[right] !== 0) {

            if (right !== left) {
                let temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
            }

            left ++
        }
    }

    return nums;
}

console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]


function moveZeroes2(nums) {

    let pos = 0

    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== 0) {
            nums[pos] = nums[i]

            if (pos !== i) {
                nums[i] = 0
            }
            pos++
        }
    }
    return nums
}

console.log(moveZeroes2([0, 1, 0, 3, 12]))
