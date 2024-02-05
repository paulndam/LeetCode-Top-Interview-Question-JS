/**
 * There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

 

Example 1:

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
 */

/**
 * ====== Approach ==========
 * 1. first assign each child their default candy
 * 2. iterate from left to right first, checking if the current child rating is higher than the previous child: (i - 1)
 * 3. if its higher, then give one more candy to that child. otherwise they still have the default candy.
 * 4. iterate from right to left and follow step 3 approach.
 * 5. return the minimum number of candies you need to have in order to distribute candies to each child respectively0
 */


const candy = (ratings) =>{

    let defaultCandy = new Array(ratings.length).fill(1);

    for(let i = 1; i < ratings.length; i++){
        if(ratings[i] > ratings[i - 1]){
            defaultCandy[i] = defaultCandy[i - 1] + 1;
        }
    }

    for(let i = ratings.length - 2; i >= 0; i--){
        if(ratings[i] > ratings[i + 1]){
            defaultCandy[i] = Math.max(defaultCandy[i], defaultCandy[i + 1] + 1)
        }
    }

    return defaultCandy.reduce((a,b)=> a + b , 0)
}

console.log(candy([1,0,2]))