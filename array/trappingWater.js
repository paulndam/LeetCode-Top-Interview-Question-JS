/**
 * 
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.


// Find the total amount of water that can be trapped between the elevation bars.

- Using a two pointer technique
 */

const trap = (height) => {

    let left = 0
    let right = height.length - 1

    // keep track of max elevation for both left and right
    let leftMax = 0;
    let rightMax = 0

    // keep track of total amount of water trapped.
    let waterTrapped = 0

    // loop until left pointer is less than right
    while(left < right){
        // check which side has lower elevation(height)
        const lowerElevationLeft = height[left]
        console.log("lowerElevationLeft ====>",lowerElevationLeft)
        const lowerElevationRight = height[right]
        console.log("lowerElevationRight ====>",lowerElevationRight)


        // if left side has lower elevation compared to right side.
        if(lowerElevationLeft < lowerElevationRight){
            // if left side has lower elevation, then calculate trapped water on the left side
            if(lowerElevationLeft > leftMax){
                console.log("left max ====>",leftMax)
                // update left to be the max of its current value height[left]
                leftMax = height[left]
            }else{
                // calc how much water can be trapped on the left side
                waterTrapped += leftMax - height[left]
            }

            left++
            
        }else{

            // same with right side.
            if(lowerElevationRight > rightMax){
                rightMax = height[right]
            }else{
                waterTrapped += rightMax - height[right]
            }
            right--
        }
    }
    console.log("water trapped ========>",waterTrapped)
    return waterTrapped
}



console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))