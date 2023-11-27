/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

const removeDuplicates = (nums) => {
    // set pointer.
    // make pointer to start at first index, because, in a sorted array first element is always unique.

    let uniqueEl = 1
    // iterate over array and start from the second element
    for (let i = 1; i < nums.length; i++){
        // if current element doesn't equal previous element, then its a unique element
        if (nums[i] !== nums[i - 1]) {
            // update array, making that current element to be unique
            nums[uniqueEl] = nums[i]
            // increment unique element
            uniqueEl++

        }
    }

    return uniqueEl

}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

console.log(removeDuplicates([1,1,2]))