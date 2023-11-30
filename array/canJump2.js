

const jump = (nums) => {

    if (nums.length <= 1) return 0;

    // set how far i can reach from current position
    let maxReach = nums[0]
    // set how far i can reach to next position
    let nextMaxReach = nums[0]
    // keep track of jumps
    let jumps = 0

    for (let i = 0; i < nums.length; i++){
        // check if we can reach end of array
        if (i > maxReach) {
            jumps++;
            maxReach = nextMaxReach
        }

        // update nextMaxReach
        nextMaxReach = Math.max(nextMaxReach, i + nums[i])
    }
    // return jump + 1, in order to reach the end.
    return jumps + 1
}

console.log(jump([2, 3, 1, 1, 4]))
console.log(jump([2,3,0,1,4]))