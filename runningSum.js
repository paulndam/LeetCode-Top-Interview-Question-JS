
// Using prefix technique and pattern to find sum of array or sub array.

function runningSum(nums) {

    let prefix = []
    let total = 0;

    for (let i = 0; i < nums.length; i++) {

        total += nums[i]

        prefix[i] = total

    }

    return prefix

}

console.log(runningSum([3,1,2,10,1]))