/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
 */

const rotateArray = (nums,k) => {

    k = k % nums.length;
    console.log("k ---->",k)

//     reverse last element in array
    reverseArray(nums,0,nums.length-1)
//     reverse other k element to the end
    reverseArray(nums,0,k - 1)

    reverseArray(nums,k,nums.length-1)


}

const reverseArray = (nums,start,end)=>{
    while(start < end){

        let temp = nums[start]

        nums[start] = nums[end];
        nums[end] = temp

        start++
        end--
    }
}

const nums = [1,2,3,4,5,6,7]
rotateArray(nums, 3)

console.log("updated array --->", nums)