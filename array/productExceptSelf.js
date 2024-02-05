

const productExceptSelf = (nums) => {
    // first create left side of array.
    let leftSideArray = new Array(nums.length)
    // create right side of array
    let rightSideArray = new Array(nums.length)

    let answer = new Array(nums.length)

    // set first element of left side array to be 1
    leftSideArray[0] = 1

    // last element of right array would be 1;
    rightSideArray[rightSideArray.length - 1] = 1

    for (let i = 1; i < nums.length; i++){
        //  for each element at index i, set it to left side[i]
        // so that each element to left of the array will have the product of the element at nums

        leftSideArray[i] = leftSideArray[i - 1] * nums[i - 1]

    }

    // loop backwards
    for (let j = nums.length - 2; j >= 0 ; j--){

        // for each element at index j, set it to the right side[j]
        // so that each element element to the right of the array will have the product of element at nums

        rightSideArray[j] = rightSideArray[j + 1] * nums[j + 1]
    }

    for (let k = 0; k < nums.length; k++){
        answer[k] = leftSideArray[k] * rightSideArray[k]
    }

    return answer
}


console.log(productExceptSelf([1,2,3,4]))