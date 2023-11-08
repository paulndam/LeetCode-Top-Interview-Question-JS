/*
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.
*/

function sumOfUniqueElements(nums) {

    let counts = new Map();
    let sum = 0;

    for (const num of nums) {
        counts.set(num, (counts.get(num)|| 0) + 1)
    }

    for (const [key, val] of counts.entries()) {
        console.log(`Key ---> ${key} : Value ---->${val}`)

        if (val === 1) {
            sum += key
        }

    }

    return sum

}

console.log(sumOfUniqueElements([1,2,3,2]))