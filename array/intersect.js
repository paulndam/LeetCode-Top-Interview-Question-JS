/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.



Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
*/

const intersect = (nums1, nums2) => {

    let map = new Map()
    let arr = []

    // loop over first array and keep track of each elements.
    for (let i = 0; i < nums1.length; i++){
        map.set(nums1[i],(map.get(nums1[i])|| 0)+1)
    }

    // loop over second array and check if element exist in first array.
    // if it does, add it to the intersection array.
    for (let j = 0; j < nums2.length; j++){
        if (map.has(nums2[j]) && map.get(nums2[j]) > 0 ) {

            arr.push(nums2[j])

            // make sure intersection array has elements the number times its appears.
            map.set(nums2[j],(map.get(nums2[j])|| 0) - 1)
        }
    }
    console.log("array -->",arr)
    return arr
}

console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([4,9,5],[9,4,9,8,4]))